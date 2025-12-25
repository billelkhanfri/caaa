import React from "react";

function VideoSection() {
  return (
    <section id="video-section" className="py-16 px-6 lg:px-32 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Découvrez notre association
      </h2>
      <div className="w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://avoxnypnpmblaitcgplp.supabase.co/storage/v1/object/public/video/dcc3502b-dba3-4f2f-804f-48a6d53bb000.MP4"
          title="Présentation CAAA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
