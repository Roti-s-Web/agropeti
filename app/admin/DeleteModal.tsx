import { Trash2, X } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName?: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  productName,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Ștergere produs
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            name="close-modal"
            type="button"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ești sigur că vrei să ștergi produsul{" "}
          <span className="font-semibold">{productName}</span>? Această acțiune
          nu poate fi anulată.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            name="close-modal"
            type="button"
            title="Anulează"
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
          >
            Anulează
          </button>
          <button
            onClick={onConfirm}
            name="confirm-delete"
            type="button"
            title="Șterge"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
          >
            <Trash2 size={16} />
            Șterge
          </button>
        </div>
      </div>
    </div>
  );
}
