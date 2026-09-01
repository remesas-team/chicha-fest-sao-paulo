const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
// Checkout modal
$$('.buy-btn').forEach(btn=>btn.addEventListener('click',()=>{ $('#modalTitle').textContent=btn.dataset.plan; $('#buyModal').showModal(); }));
$('#buyForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const msg=`Hola Viello, soy ${d.get('name')}. Quiero reservar: ${$('#modalTitle').textContent}. Mi WhatsApp es ${d.get('phone')} y mi correo ${d.get('email')}.`;window.open(`https://wa.me/51999999999?text=${encodeURIComponent(msg)}`,'_blank');$('#buyModal').close();});
// Copy PIX
$('#copyPix').addEventListener('click',async()=>{await navigator.clipboard?.writeText($('#pixKey').textContent);$('#copyPix').textContent='¡Clave copiada!';setTimeout(()=>$('#copyPix').textContent='Copiar clave',1800)});
// Media tabs
$$('.tab').forEach(tab=>tab.addEventListener('click',()=>{$$('.tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');$$('.embed').forEach(e=>e.classList.add('hidden'));$('#'+tab.dataset.target).classList.remove('hidden')}));
const data={contacts:[['María Fernanda','+51 987 222 140'],['Diego Torres','+55 11 98871 2040'],['Lucía Paredes','+51 944 830 612'],['Andrés Vega','+55 11 99220 1808']],videos:[['SAIKO - HEY BB','YouTube · 2:57'],['Saiko - Polaris','YouTube · 3:12'],['Saiko x Yandel - CORLEONE','YouTube · 3:52']],promos:[['Early bird individual','S/ 100 · hasta dom 13'],['Pack x3 entradas','S/ 200 · hasta dom 13']]};
function renderAdmin(type='contacts'){const rows=data[type].map((r,i)=>`<div class="admin-row"><div><strong>${r[0]}</strong><small>${r[1]}</small></div><span class="admin-action">Editar</span></div>`).join('');$('#adminPanel').innerHTML=`<div class="admin-content">${rows}<form class="admin-form"><input placeholder="Añadir ${type==='contacts'?'contacto':type==='videos'?'video':'promoción'}" required><button>＋</button></form></div>`;$('#adminPanel form').addEventListener('submit',e=>{e.preventDefault();const v=e.target.querySelector('input').value;data[type].push([v,type==='contacts'?'+51 000 000 000':'Borrador']);renderAdmin(type);if(type==='contacts')$('#contactCount').textContent=data.contacts.length});}
$$('.admin-tab').forEach(tab=>tab.addEventListener('click',()=>{$$('.admin-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');renderAdmin(tab.dataset.admin)}));renderAdmin();
// Mobile menu
$('.menu-btn').addEventListener('click',()=>{$('.topbar nav').classList.toggle('open')});
