"use client";

export default function DeleteModal({ action }) {
  return (
    <>
      {/* Bouton ouvrir modal */}
      <button
        type="button"
        className="btn btn-error w-full"
        onClick={() => document.getElementById("delete_modal").showModal()}
      >
        Supprimer
      </button>

      {/* Modal DaisyUI */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Confirmer la suppression
          </h3>

          <p className="py-4">
            Voulez-vous vraiment supprimer cet élément ?
          </p>

          <div className="modal-action">
            {/* Annuler */}
            <form method="dialog">
              <button className="btn">Annuler</button>
            </form>

            {/* Confirmer */}
            <form action={action}>
              <button className="btn btn-error">
                Supprimer
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
