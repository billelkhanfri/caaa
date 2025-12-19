import PostForm from "../../../components/PostForm"
import { createSupabaseServer } from "../../../lib/supabase/server"
import { redirect } from "next/navigation"

export default function NewPostPage() {
  async function createPost( formData) {
    "use server"

    const supabase = createSupabaseServer()

    const title = formData.get("title") 
    const file = formData.get("image") 

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")

    let imageUrl= null

    // ✅ Upload image if provided
    if (file && file.size > 0) {
      const ext = file.name.split(".").pop()
      const fileName = `${slug}-${crypto.randomUUID()}.${ext}`
      const filePath = `posts/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file, {
          contentType: file.type,
          upsert: false,
        })

      if (uploadError) {
        throw new Error(uploadError.message)
      }

      const { data } = supabase.storage
        .from("media")
        .getPublicUrl(filePath)

      imageUrl = data.publicUrl
    }

    const { error } = await supabase.from("posts").insert({
      title,
      slug,
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      main_image: imageUrl
        ? {
            alt: title,
            url: imageUrl,
          }
        : null,
    })

    if (error) {
      throw new Error(error.message)
    }

    redirect("/admin/posts")
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <PostForm action={createPost} />
    </div>
  )
}
