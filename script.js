const sky = document.getElementById('sky');
const rand = (a, b) => a + Math.random() * (b - a);

// puntini gialli piccolissimi
for (let i = 0; i < 90; i++) {
  const d = document.createElement('span');
  d.className = 'dot';
  const s = rand(1, 3);
  d.style.width = d.style.height = s + 'px';
  d.style.left = rand(0, 100) + '%';
  d.style.top = rand(0, 100) + '%';
  d.style.animationDelay = rand(0, 4) + 's';
  d.style.animationDuration = rand(2, 5) + 's';
  sky.appendChild(d);
}

// stelline
for (let i = 0; i < 14; i++) {
  const st = document.createElement('span');
  st.className = 'star';
  const s = rand(8, 18);
  st.style.width = st.style.height = s + 'px';
  st.style.left = rand(2, 96) + '%';
  st.style.top = rand(2, 96) + '%';
  st.style.rotate = rand(-20, 20) + 'deg';
  st.style.animationDelay = rand(0, 4) + 's';
  st.style.animationDuration = rand(3, 6) + 's';
  sky.appendChild(st);
}

const scene = document.getElementById('scene');
const emojis = ['💤', '🌙', '🌠', '🧸', '🧡'];

// crea i cuoricini con posizione, ritardo e durata casuali
for (let i = 0; i < 14; i++) {
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = emojis[i % emojis.length];
  h.style.left = (8 + Math.random() * 84) + '%';
  h.style.animationDelay = (3 + Math.random() * 4) + 's';
  h.style.animationDuration = (3.5 + Math.random() * 2.5) + 's';
  scene.appendChild(h);
}

// rivedi: tolgo la classe, forzo il reflow e la rimetto
document.getElementById('replay').addEventListener('click', () => {
  scene.classList.remove('play');
  void scene.offsetWidth;
  scene.classList.add('play');
});