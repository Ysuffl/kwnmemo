/* empty css                                 */
import { e as createComponent, r as renderTemplate, k as defineScriptVars, h as addAttribute, l as renderHead } from '../chunks/astro/server_Bdqaxvz8.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const memories = [
	{
		slug: "sunset-beach",
		title: "Sunset at The Beach",
		date: "2025-11-25",
		location: "Jakarta, Indonesia",
		image: "1.jpg",
		description: "A quiet evening I still remember. The wind was warm and everything felt peaceful."
	},
	{
		slug: "old-friends",
		title: "Old Friends Reunion",
		date: "2025-11-25",
		location: "Jakarta, Indonesia",
		image: "2.jpg",
		description: "We laughed like nothing changed. Maybe some things never do."
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const preview = memories.slice(0, 2);
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><title>My Space \u2014 Yusuf</title>', `</head> <body class="relative overflow-x-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 text-gray-800 pt-28" data-astro-cid-j7pv25f6> <!-- Bubbles Background --> <div class="bubble" style="width: 30px; height: 30px; left: 10%; animation-duration: 8s; animation-delay: 0s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 20px; height: 20px; left: 30%; animation-duration: 10s; animation-delay: 2s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 40px; height: 40px; left: 50%; animation-duration: 12s; animation-delay: 1s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 25px; height: 25px; left: 70%; animation-duration: 9s; animation-delay: 3s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 35px; height: 35px; left: 85%; animation-duration: 11s; animation-delay: 0.5s;" data-astro-cid-j7pv25f6></div> <!-- NAV - Floating Bar --> <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full shadow-xl border border-cyan-200/50 w-[90%] max-w-2xl" data-astro-cid-j7pv25f6> <h1 class="text-xl font-bold text-cyan-900 flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="text-2xl" data-astro-cid-j7pv25f6>\u{1F41F}</span> My Space
</h1> <a href="#" class="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all" data-astro-cid-j7pv25f6>
Memories
</a> </nav> <!-- HERO with Mola Mola --> <section class="relative z-10 max-w-4xl mx-auto px-8 py-20" data-astro-cid-j7pv25f6> <!-- Floating Mola Mola --> <div class="absolute -top-10 right-0 mola-float opacity-20 pointer-events-none" data-astro-cid-j7pv25f6> <svg width="200" height="200" viewBox="0 0 200 200" class="mola-swim" data-astro-cid-j7pv25f6> <ellipse cx="100" cy="100" rx="70" ry="90" fill="#7DD3FC" opacity="0.6" data-astro-cid-j7pv25f6></ellipse> <ellipse cx="100" cy="100" rx="50" ry="70" fill="#38BDF8" data-astro-cid-j7pv25f6></ellipse> <circle cx="80" cy="80" r="8" fill="#1E3A8A" data-astro-cid-j7pv25f6></circle> <path d="M 30 100 Q 20 90, 25 80" stroke="#0C4A6E" stroke-width="3" fill="none" data-astro-cid-j7pv25f6></path> <path d="M 170 80 L 185 70 L 180 90 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> <path d="M 170 120 L 185 130 L 180 110 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> </svg> </div> <h2 class="text-5xl font-bold mb-6 leading-tight text-cyan-900" data-astro-cid-j7pv25f6>
Hi, I'm Aqueena. \u{1F30A}
</h2> <p class="text-lg text-gray-700 mb-4" data-astro-cid-j7pv25f6>
Welcome to my little corner of the ocean \u2014 a place where I keep the
        memories that matter to me, floating gently like a Mola Mola in deep waters.
</p> <p class="text-lg text-gray-700 mb-4" data-astro-cid-j7pv25f6>
Some memories are happy, some soft, some painful \u2014 but they make me who I
        am. This website is where I store them, preserved in the currents of time.
</p> <p class="text-lg text-cyan-800 mb-10 font-medium" data-astro-cid-j7pv25f6>
Dive in and explore a few memories from my life.
</p> </section> <!-- MEMORY PREVIEW --> <section class="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" data-astro-cid-j7pv25f6> `, ' </section> <!-- MODAL --> <div id="modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden items-center justify-center p-4 modal-backdrop" data-astro-cid-j7pv25f6> <div class="relative bg-white/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-cyan-300 modal-content" data-astro-cid-j7pv25f6> <!-- Close Button --> <button id="close-modal" class="absolute top-4 right-4 z-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all" data-astro-cid-j7pv25f6> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-j7pv25f6></path> </svg> </button> <!-- Modal Content --> <div id="modal-content" class="p-8" data-astro-cid-j7pv25f6> <!-- Content will be inserted by JavaScript --> </div> </div> </div> <!-- VIEW ALL BUTTON --> <div class="relative z-10 w-full text-center pb-20" data-astro-cid-j7pv25f6> <a href="#" class="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>\u{1F41F}</span> View All Memories <span data-astro-cid-j7pv25f6>\u2192</span> </a> </div> <!-- Decorative Mola Mola at Bottom --> <div class="relative z-10 max-w-4xl mx-auto px-6 pb-12 text-center" data-astro-cid-j7pv25f6> <svg width="120" height="120" viewBox="0 0 200 200" class="inline-block mola-float opacity-30" data-astro-cid-j7pv25f6> <ellipse cx="100" cy="100" rx="70" ry="90" fill="#7DD3FC" opacity="0.6" data-astro-cid-j7pv25f6></ellipse> <ellipse cx="100" cy="100" rx="50" ry="70" fill="#38BDF8" data-astro-cid-j7pv25f6></ellipse> <circle cx="80" cy="80" r="8" fill="#1E3A8A" data-astro-cid-j7pv25f6></circle> <circle cx="75" cy="78" r="3" fill="white" data-astro-cid-j7pv25f6></circle> <path d="M 30 100 Q 20 90, 25 80" stroke="#0C4A6E" stroke-width="3" fill="none" data-astro-cid-j7pv25f6></path> <path d="M 170 80 L 185 70 L 180 90 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> <path d="M 170 120 L 185 130 L 180 110 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> </svg> <p class="text-cyan-700 italic mt-4" data-astro-cid-j7pv25f6>\n"Just keep swimming through memories..." \u2014 Mola Mola wisdom\n</p> </div> <!-- FOOTER --> <footer class="relative z-10 w-full text-center py-8 bg-cyan-900/10 backdrop-blur-sm text-cyan-800 text-sm border-t border-cyan-200" data-astro-cid-j7pv25f6> <p class="mb-2" data-astro-cid-j7pv25f6>\xA9 ', ' Yusuf \u2014 My Space \u{1F30A}</p> <p class="text-xs text-cyan-600" data-astro-cid-j7pv25f6>Swimming through memories, one wave at a time</p> </footer> <script>(function(){', `
      const modal = document.getElementById('modal');
      const modalContent = document.getElementById('modal-content');
      const closeBtn = document.getElementById('close-modal');
      const memoryCards = document.querySelectorAll('.memory-card');

      function openModal(index) {
        const memory = memories[index];
        
        modalContent.innerHTML = \`
          <img 
            src="\${memory.image}" 
            alt="\${memory.title}" 
            class="w-full h-96 object-cover rounded-2xl mb-6 shadow-lg"
          />
          <h3 class="text-3xl font-bold text-cyan-900 mb-4">\${memory.title}</h3>
          <div class="flex gap-6 mb-6 text-gray-700">
            <p class="flex items-center gap-2">
              <span class="text-xl">\u{1F4C5}</span>
              <span class="font-semibold">\${memory.date}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-xl">\u{1F4CD}</span>
              <span class="font-semibold">\${memory.location}</span>
            </p>
          </div>
          <p class="text-lg text-gray-700 leading-relaxed">\${memory.description}</p>
        \`;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
      }

      // Add click event to each memory card
      memoryCards.forEach(card => {
        card.addEventListener('click', () => {
          const index = parseInt(card.getAttribute('data-memory-index'));
          openModal(index);
        });
      });

      // Close button
      closeBtn.addEventListener('click', closeModal);

      // Close modal when clicking outside
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Close modal with ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
        }
      });
    })();<\/script> </body> </html>`], ['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><title>My Space \u2014 Yusuf</title>', `</head> <body class="relative overflow-x-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 text-gray-800 pt-28" data-astro-cid-j7pv25f6> <!-- Bubbles Background --> <div class="bubble" style="width: 30px; height: 30px; left: 10%; animation-duration: 8s; animation-delay: 0s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 20px; height: 20px; left: 30%; animation-duration: 10s; animation-delay: 2s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 40px; height: 40px; left: 50%; animation-duration: 12s; animation-delay: 1s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 25px; height: 25px; left: 70%; animation-duration: 9s; animation-delay: 3s;" data-astro-cid-j7pv25f6></div> <div class="bubble" style="width: 35px; height: 35px; left: 85%; animation-duration: 11s; animation-delay: 0.5s;" data-astro-cid-j7pv25f6></div> <!-- NAV - Floating Bar --> <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full shadow-xl border border-cyan-200/50 w-[90%] max-w-2xl" data-astro-cid-j7pv25f6> <h1 class="text-xl font-bold text-cyan-900 flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="text-2xl" data-astro-cid-j7pv25f6>\u{1F41F}</span> My Space
</h1> <a href="#" class="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all" data-astro-cid-j7pv25f6>
Memories
</a> </nav> <!-- HERO with Mola Mola --> <section class="relative z-10 max-w-4xl mx-auto px-8 py-20" data-astro-cid-j7pv25f6> <!-- Floating Mola Mola --> <div class="absolute -top-10 right-0 mola-float opacity-20 pointer-events-none" data-astro-cid-j7pv25f6> <svg width="200" height="200" viewBox="0 0 200 200" class="mola-swim" data-astro-cid-j7pv25f6> <ellipse cx="100" cy="100" rx="70" ry="90" fill="#7DD3FC" opacity="0.6" data-astro-cid-j7pv25f6></ellipse> <ellipse cx="100" cy="100" rx="50" ry="70" fill="#38BDF8" data-astro-cid-j7pv25f6></ellipse> <circle cx="80" cy="80" r="8" fill="#1E3A8A" data-astro-cid-j7pv25f6></circle> <path d="M 30 100 Q 20 90, 25 80" stroke="#0C4A6E" stroke-width="3" fill="none" data-astro-cid-j7pv25f6></path> <path d="M 170 80 L 185 70 L 180 90 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> <path d="M 170 120 L 185 130 L 180 110 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> </svg> </div> <h2 class="text-5xl font-bold mb-6 leading-tight text-cyan-900" data-astro-cid-j7pv25f6>
Hi, I'm Aqueena. \u{1F30A}
</h2> <p class="text-lg text-gray-700 mb-4" data-astro-cid-j7pv25f6>
Welcome to my little corner of the ocean \u2014 a place where I keep the
        memories that matter to me, floating gently like a Mola Mola in deep waters.
</p> <p class="text-lg text-gray-700 mb-4" data-astro-cid-j7pv25f6>
Some memories are happy, some soft, some painful \u2014 but they make me who I
        am. This website is where I store them, preserved in the currents of time.
</p> <p class="text-lg text-cyan-800 mb-10 font-medium" data-astro-cid-j7pv25f6>
Dive in and explore a few memories from my life.
</p> </section> <!-- MEMORY PREVIEW --> <section class="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" data-astro-cid-j7pv25f6> `, ' </section> <!-- MODAL --> <div id="modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden items-center justify-center p-4 modal-backdrop" data-astro-cid-j7pv25f6> <div class="relative bg-white/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-cyan-300 modal-content" data-astro-cid-j7pv25f6> <!-- Close Button --> <button id="close-modal" class="absolute top-4 right-4 z-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all" data-astro-cid-j7pv25f6> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-j7pv25f6></path> </svg> </button> <!-- Modal Content --> <div id="modal-content" class="p-8" data-astro-cid-j7pv25f6> <!-- Content will be inserted by JavaScript --> </div> </div> </div> <!-- VIEW ALL BUTTON --> <div class="relative z-10 w-full text-center pb-20" data-astro-cid-j7pv25f6> <a href="#" class="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>\u{1F41F}</span> View All Memories <span data-astro-cid-j7pv25f6>\u2192</span> </a> </div> <!-- Decorative Mola Mola at Bottom --> <div class="relative z-10 max-w-4xl mx-auto px-6 pb-12 text-center" data-astro-cid-j7pv25f6> <svg width="120" height="120" viewBox="0 0 200 200" class="inline-block mola-float opacity-30" data-astro-cid-j7pv25f6> <ellipse cx="100" cy="100" rx="70" ry="90" fill="#7DD3FC" opacity="0.6" data-astro-cid-j7pv25f6></ellipse> <ellipse cx="100" cy="100" rx="50" ry="70" fill="#38BDF8" data-astro-cid-j7pv25f6></ellipse> <circle cx="80" cy="80" r="8" fill="#1E3A8A" data-astro-cid-j7pv25f6></circle> <circle cx="75" cy="78" r="3" fill="white" data-astro-cid-j7pv25f6></circle> <path d="M 30 100 Q 20 90, 25 80" stroke="#0C4A6E" stroke-width="3" fill="none" data-astro-cid-j7pv25f6></path> <path d="M 170 80 L 185 70 L 180 90 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> <path d="M 170 120 L 185 130 L 180 110 Z" fill="#38BDF8" data-astro-cid-j7pv25f6></path> </svg> <p class="text-cyan-700 italic mt-4" data-astro-cid-j7pv25f6>\n"Just keep swimming through memories..." \u2014 Mola Mola wisdom\n</p> </div> <!-- FOOTER --> <footer class="relative z-10 w-full text-center py-8 bg-cyan-900/10 backdrop-blur-sm text-cyan-800 text-sm border-t border-cyan-200" data-astro-cid-j7pv25f6> <p class="mb-2" data-astro-cid-j7pv25f6>\xA9 ', ' Yusuf \u2014 My Space \u{1F30A}</p> <p class="text-xs text-cyan-600" data-astro-cid-j7pv25f6>Swimming through memories, one wave at a time</p> </footer> <script>(function(){', `
      const modal = document.getElementById('modal');
      const modalContent = document.getElementById('modal-content');
      const closeBtn = document.getElementById('close-modal');
      const memoryCards = document.querySelectorAll('.memory-card');

      function openModal(index) {
        const memory = memories[index];
        
        modalContent.innerHTML = \\\`
          <img 
            src="\\\${memory.image}" 
            alt="\\\${memory.title}" 
            class="w-full h-96 object-cover rounded-2xl mb-6 shadow-lg"
          />
          <h3 class="text-3xl font-bold text-cyan-900 mb-4">\\\${memory.title}</h3>
          <div class="flex gap-6 mb-6 text-gray-700">
            <p class="flex items-center gap-2">
              <span class="text-xl">\u{1F4C5}</span>
              <span class="font-semibold">\\\${memory.date}</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-xl">\u{1F4CD}</span>
              <span class="font-semibold">\\\${memory.location}</span>
            </p>
          </div>
          <p class="text-lg text-gray-700 leading-relaxed">\\\${memory.description}</p>
        \\\`;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
      }

      // Add click event to each memory card
      memoryCards.forEach(card => {
        card.addEventListener('click', () => {
          const index = parseInt(card.getAttribute('data-memory-index'));
          openModal(index);
        });
      });

      // Close button
      closeBtn.addEventListener('click', closeModal);

      // Close modal when clicking outside
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Close modal with ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
        }
      });
    })();<\/script> </body> </html>`])), renderHead(), preview.map((item, index) => renderTemplate`<button${addAttribute(index, "data-memory-index")} class="memory-card group block relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 hover:-translate-y-2 cursor-pointer w-full text-left" data-astro-cid-j7pv25f6> <div class="relative overflow-hidden h-80" data-astro-cid-j7pv25f6> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" data-astro-cid-j7pv25f6> <p class="text-white text-lg font-semibold mb-2" data-astro-cid-j7pv25f6>📅 ${item.date}</p> <p class="text-cyan-200 text-base" data-astro-cid-j7pv25f6>📍 ${item.location}</p> </div> </div> </button>`), (/* @__PURE__ */ new Date()).getFullYear(), defineScriptVars({ memories: preview }));
}, "/home/hahayusuf/kiwin/src/pages/index.astro", void 0);

const $$file = "/home/hahayusuf/kiwin/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
