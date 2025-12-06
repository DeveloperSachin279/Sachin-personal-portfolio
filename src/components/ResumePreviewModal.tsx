import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export function ResumePreviewModal({ isOpen, onClose, resumeUrl }: ResumePreviewModalProps) {
  const handleDownload = () => {
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sachin_Lodhi_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl gradient-text">Resume Preview</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close preview"
              >
                <X size={24} />
              </button>
            </div>

            {/* Resume Preview */}
            <div className="flex-1 overflow-auto bg-gray-50 p-4">
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={resumeUrl}
                  alt="Sachin Lodhi Resume"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Footer with Actions */}
            <div className="flex items-center justify-center gap-4 p-6 border-t border-gray-200 bg-white">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-8 py-3 bg-gradient-to-r from-black to-[#cd7f32] text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}