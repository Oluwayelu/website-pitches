'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

// Plays an Instagram post/reel inside the page using Instagram's own embed player.
// Nothing from Instagram loads until a visitor opens it.
export default function ReelModal({ code, onClose }: { code: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!code) return;
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    addEventListener('keydown', k);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [code, onClose]);
  if (!code) return null;
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label="Instagram video" onClick={onClose} className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-3">
      <button aria-label="Close video" onClick={onClose} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white"><X size={20} /></button>
      <div onClick={(e) => e.stopPropagation()} className="flex h-full max-h-[92vh] w-full max-w-[430px] flex-col gap-3">
        <iframe title="Instagram video" src={`https://www.instagram.com/p/${code}/embed/`} className="min-h-0 w-full flex-1 rounded-xl bg-white" allow="autoplay; encrypted-media; fullscreen" allowFullScreen loading="lazy" />
        <a href={`https://www.instagram.com/p/${code}/`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white"><InstagramIcon size={16} /> Open on Instagram</a>
      </div>
    </div>,
    document.body,
  );
}
