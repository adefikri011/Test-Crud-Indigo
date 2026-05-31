(()=>{var L={name:"Employee Management System",version:"1.0.0",author:"INDOGO Test",storage:{employees:"indogo_employees"},departments:["IT","HR","Finance","Marketing","Operations"],currency:{symbol:"Rp",locale:"id-ID"}};window.APP_CONFIG=L;var F={set:(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error("Error saving to localStorage:",n),!1}},get:e=>{try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error reading from localStorage:",t),null}},remove:e=>{try{return localStorage.removeItem(e),!0}catch(t){return console.error("Error removing from localStorage:",t),!1}},clearAll:()=>{try{return localStorage.clear(),!0}catch(e){return console.error("Error clearing localStorage:",e),!1}}};window.StorageHelper=F;var c={validateEmployeeForm:e=>{let t=!0;return c.clearErrors(),(!e.name||e.name.trim()==="")&&(c.showError("nameError"),t=!1),(!e.email||!c.isValidEmail(e.email))&&(c.showError("emailError"),t=!1),(!e.position||e.position.trim()==="")&&(c.showError("positionError"),t=!1),(!e.department||e.department.trim()==="")&&(c.showError("departmentError"),t=!1),(!e.salary||parseFloat(e.salary)<=0)&&(c.showError("salaryError"),t=!1),(!e.joinDate||e.joinDate.trim()==="")&&(c.showError("joinDateError"),t=!1),t},isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),showError:e=>{$("#"+e).removeClass("hidden")},clearErrors:()=>{$("#employeeForm p[id$='Error']").addClass("hidden")},getFormData:()=>({name:$("#name").val().trim(),email:$("#email").val().trim(),position:$("#position").val().trim(),department:$("#department").val(),salary:$("#salary").val(),joinDate:$("#joinDate").val()}),resetForm:()=>{$("#employeeForm")[0].reset(),$("#employeeId").val(""),c.clearErrors()}};window.ValidationHelper=c;var w={renderTable:e=>{let t=$("#employeeTableBodyDesktop"),n=$("#employeeCardContainer");if(t.empty(),n.empty(),!e||e.length===0){t.append(`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `),n.append(`
      <div class="text-center text-slate-500 py-10">
        Belum ada data karyawan.
      </div>
    `);return}e.forEach((a,r)=>{let s=`
      <tr class="hover:bg-slate-50 transition">
        <td class="px-6 py-4 text-sm">${r+1}</td>
        <td class="px-6 py-4 text-sm font-medium">${a.name}</td>
        <td class="px-6 py-4 text-sm">${a.email}</td>
        <td class="px-6 py-4 text-sm">${a.position}</td>
        <td class="px-6 py-4 text-sm">${a.department}</td>
        <td class="px-6 py-4 text-sm">${w.formatCurrency(a.salary)}</td>
        <td class="px-6 py-4 text-sm">${a.joinDate}</td>
        <td class="px-6 py-4 text-center text-sm">
          <button class="edit-btn text-blue-600 mr-3" data-id="${a.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600" data-id="${a.id}">
            Delete
          </button>
        </td>
      </tr>
    `;t.append(s);let l=`
      <div class="bg-slate-50 rounded-xl p-4 shadow-sm border border-slate-200">
        
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="font-semibold text-slate-900">${a.name}</h3>
            <p class="text-sm text-slate-500">${a.position}</p>
          </div>
          <span class="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-full">
            ${a.department}
          </span>
        </div>

        <div class="text-sm text-slate-600 space-y-1 mt-3">
          <p><strong>Email:</strong> ${a.email}</p>
          <p><strong>Gaji:</strong> ${w.formatCurrency(a.salary)}</p>
          <p><strong>Masuk:</strong> ${a.joinDate}</p>
        </div>

        <div class="flex justify-end gap-4 mt-4 text-sm">
          <button class="edit-btn text-blue-600 font-medium" data-id="${a.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600 font-medium" data-id="${a.id}">
            Delete
          </button>
        </div>

      </div>
    `;n.append(l)})},getEmptyStateRow:()=>`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `,formatCurrency:e=>{let t=parseFloat(e)||0;return new Intl.NumberFormat(APP_CONFIG.currency.locale,{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t)},updateSummary:()=>{let e=DataService.getStatistics();$("#totalEmployees").text(e.totalEmployees),$("#totalDepartments").text(e.totalDepartments),$("#averageSalary").text(w.formatCurrency(e.averageSalary))}};window.TableComponent=w;var C={openCreateModal:()=>{$("#modalTitle").text("Tambah Karyawan"),$("#submitBtn").text("Simpan"),ValidationHelper.resetForm(),$("#employeeModal").removeClass("hidden").addClass("flex")},openEditModal:e=>{$("#modalTitle").text("Edit Karyawan"),$("#submitBtn").text("Update"),$("#employeeId").val(e.id),$("#name").val(e.name),$("#email").val(e.email),$("#position").val(e.position),$("#department").val(e.department),$("#salary").val(e.salary),$("#joinDate").val(e.joinDate),$("#employeeModal").removeClass("hidden").addClass("flex")},closeModal:()=>{$("#employeeModal").removeClass("flex").addClass("hidden"),ValidationHelper.resetForm()},init:()=>{$(document).on("click","#closeModal",function(){C.closeModal()}),$(document).on("click","#cancelBtn",function(){C.closeModal()}),$(document).on("click","#employeeModal",function(e){e.target.id==="employeeModal"&&C.closeModal()})}};window.ModalComponent=C;var E={successSoundPath:"assets/sounds/success.mp3",setSuccessSoundPath:e=>{E.successSoundPath=e},playSuccess:()=>{if(!E.successSoundPath)return;let e=new Audio(E.successSoundPath);e.volume=.35,e.play().catch(()=>{})}};window.SoundComponent=E;var H={showToast:(e,t="success")=>{t==="success"&&window.SoundComponent&&typeof SoundComponent.playSuccess=="function"&&SoundComponent.playSuccess();let n="toast-"+Date.now(),r=`
      <div id="${n}" 
           class="text-white px-5 py-3 rounded-xl shadow-lg ${{success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600"}[t]} 
                  animate-fadeIn transition flex items-center justify-between gap-4">

        <span class="text-sm font-medium">${e}</span>

        <button class="text-white hover:opacity-80" onclick="$('#${n}').remove()">
          \u2715
        </button>
      </div>
    `;$("#toastContainer").append(r),setTimeout(()=>{$("#"+n).fadeOut(300,function(){$(this).remove()})},3e3)}};window.AlertComponent=H;var T={show:(e="Memuat data...")=>{$("#loadingText").text(e),$("#globalLoading").removeClass("hidden").addClass("flex")},hide:()=>{$("#globalLoading").removeClass("flex").addClass("hidden")}};window.LoadingComponent=T;var g={resolver:null,ensureDialog:()=>{if(document.getElementById("confirmDeleteOverlay"))return;document.body.insertAdjacentHTML("beforeend",`
      <div id="confirmDeleteOverlay" class="fixed inset-0 z-[110] hidden items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4">
        <div class="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-fadeIn border border-slate-100">
          <div class="px-6 pt-6 pb-4">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>

              <div class="flex-1">
                <h3 id="confirmDeleteTitle" class="text-xl font-semibold text-slate-900">Hapus data ini?</h3>
                <p id="confirmDeleteMessage" class="mt-2 text-sm leading-6 text-slate-500">
                  Data yang sudah dihapus tidak bisa dikembalikan.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
            <button id="confirmDeleteCancel" type="button" class="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">
              Batal
            </button>
            <button id="confirmDeleteAction" type="button" class="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">
              Hapus
            </button>
          </div>
        </div>
      </div>
    `)},hide:()=>{let e=document.getElementById("confirmDeleteOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex")),g.resolver=null},show:({title:e,message:t,confirmText:n,cancelText:a})=>{g.ensureDialog();let r=document.getElementById("confirmDeleteOverlay"),s=document.getElementById("confirmDeleteTitle"),l=document.getElementById("confirmDeleteMessage"),m=document.getElementById("confirmDeleteAction"),p=document.getElementById("confirmDeleteCancel");return s&&e&&(s.textContent=e),l&&t&&(l.textContent=t),m&&n&&(m.textContent=n),p&&a&&(p.textContent=a),r.classList.remove("hidden"),r.classList.add("flex"),new Promise(u=>{g.resolver=u;let y=()=>{g.hide(),u(!1)},b=()=>{g.hide(),u(!0)},S=o=>{o.target===r&&y()},v=o=>{o.key==="Escape"&&y()};p.onclick=y,m.onclick=b,r.onclick=S,document.addEventListener("keydown",v,{once:!0})})}};window.ConfirmComponent=g;var M={initDepartmentFilter:()=>{let e=document.getElementById("departmentFilter");if(!e||e.dataset.multiselectInitialized==="true")return;e.dataset.multiselectInitialized="true",e.multiple=!0;let t=e.querySelector('option[value=""]');t&&t.remove(),e.classList.add("department-multi-native");let n=document.createElement("div");n.id="departmentFilterCustom",n.className="department-multi";let a=document.createElement("button");a.type="button",a.className="department-multi-trigger",a.setAttribute("aria-haspopup","listbox"),a.setAttribute("aria-expanded","false");let r=document.createElement("span");r.className="department-multi-label",r.textContent="Semua Departemen";let s=document.createElement("span");s.className="department-multi-caret",s.setAttribute("aria-hidden","true"),s.textContent="\u25BE";let l=document.createElement("div");l.className="department-multi-menu",l.setAttribute("role","listbox"),l.setAttribute("aria-multiselectable","true");let m=document.createElement("div");m.className="department-multi-actions";let p=document.createElement("button");p.type="button",p.className="department-multi-action-btn",p.textContent="Pilih Semua";let u=document.createElement("button");u.type="button",u.className="department-multi-action-btn",u.textContent="Reset",m.append(p,u),l.appendChild(m),Array.from(e.options).forEach(o=>{let i=document.createElement("label");i.className="department-multi-item";let h=document.createElement("input");h.type="checkbox",h.className="department-multi-checkbox",h.value=o.value,h.checked=o.selected;let f=document.createElement("span");f.className="department-multi-item-text",f.textContent=o.text,i.append(h,f),l.appendChild(i)}),a.append(r,s),n.append(a,l),e.insertAdjacentElement("afterend",n);let y=()=>{let o=[],i=Array.from(l.querySelectorAll(".department-multi-checkbox"));if(Array.from(l.querySelectorAll(".department-multi-checkbox:checked")).forEach(h=>{var D;let f=(D=h.closest("label"))==null?void 0:D.querySelector(".department-multi-item-text");f&&o.push(f.textContent||"")}),o.length===0){r.textContent="Semua Departemen";return}if(o.length===i.length&&i.length>0){r.textContent="Semua Departemen";return}if(o.length<=2){r.textContent=o.join(", ");return}r.textContent=`${o.slice(0,2).join(", ")} +${o.length-2}`},b=()=>{n.classList.remove("is-open"),a.setAttribute("aria-expanded","false")},S=()=>{n.classList.add("is-open"),a.setAttribute("aria-expanded","true")},v=()=>{let o=Array.from(l.querySelectorAll(".department-multi-checkbox:checked")).map(i=>i.value);Array.from(e.options).forEach(i=>{i.selected=o.includes(i.value)}),e.dispatchEvent(new Event("change",{bubbles:!0})),y()};a.addEventListener("click",()=>{n.classList.contains("is-open")?b():S()}),l.addEventListener("change",o=>{o.target instanceof HTMLInputElement&&o.target.classList.contains("department-multi-checkbox")&&v()}),p.addEventListener("click",()=>{Array.from(l.querySelectorAll(".department-multi-checkbox")).forEach(o=>{o.checked=!0}),v()}),u.addEventListener("click",()=>{Array.from(l.querySelectorAll(".department-multi-checkbox")).forEach(o=>{o.checked=!1}),v()}),document.addEventListener("click",o=>{o.target instanceof Element&&(o.target.closest("#departmentFilterCustom")||b())}),document.addEventListener("keydown",o=>{o.key==="Escape"&&b()}),y()},init:()=>{M.initDepartmentFilter()}};window.MultiSelectComponent=M;var d={getAllEmployees:()=>StorageHelper.get(APP_CONFIG.storage.employees)||[],saveEmployees:e=>{StorageHelper.set(APP_CONFIG.storage.employees,e)},addEmployee:e=>{let t=d.getAllEmployees(),n={...e,id:Date.now()+Math.floor(Math.random()*1e3),createdAt:new Date().toISOString()};return t.push(n),d.saveEmployees(t),n},getEmployeeById:e=>d.getAllEmployees().find(n=>n.id===e)||null,updateEmployee:(e,t)=>{let n=d.getAllEmployees(),a=n.findIndex(r=>r.id===e);return a===-1?null:(n[a]={...n[a],...t,updatedAt:new Date().toISOString()},d.saveEmployees(n),n[a])},deleteEmployee:e=>{let t=d.getAllEmployees(),n=t.filter(a=>a.id!==e);return t.length===n.length?!1:(d.saveEmployees(n),!0)},searchEmployees:e=>{if(!e)return d.getAllEmployees();let t=d.getAllEmployees(),n=e.toLowerCase();return t.filter(a=>a.name.toLowerCase().includes(n)||a.email.toLowerCase().includes(n)||a.position.toLowerCase().includes(n)||a.department.toLowerCase().includes(n))},getStatistics:()=>{let e=d.getAllEmployees(),t=e.length,a=[...new Set(e.map(l=>l.department))].length,r=e.reduce((l,m)=>l+(parseFloat(m.salary)||0),0),s=t>0?Math.round(r/t):0;return{totalEmployees:t,totalDepartments:a,averageSalary:s}}};window.DataService=d;var k={handleOpenModal:()=>{$(document).on("click","#addEmployeeBtn",function(){ModalComponent.openCreateModal()})},handleSubmit:()=>{$(document).on("submit","#employeeForm",function(e){if(e.preventDefault(),$("#employeeId").val())return;let n=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(n)&&(LoadingComponent.show("Menyimpan data karyawan..."),setTimeout(()=>{DataService.addEmployee(n),ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Karyawan berhasil ditambahkan","success"),LoadingComponent.hide()},600))})},init:()=>{k.handleOpenModal(),k.handleSubmit()}};window.CreateHandler=k;var x={getFilteredEmployees:()=>{let e=$("#searchInput").val()||"",t=$("#departmentFilter").val(),n=Array.isArray(t)?t.filter(Boolean):t?[t]:[],a=DataService.searchEmployees(e);return n.length===0?a:a.filter(r=>n.includes(r.department))},renderAll:()=>{let e=x.getFilteredEmployees();TableComponent.renderTable(e),TableComponent.updateSummary()},handleSearch:()=>{$(document).on("input","#searchInput",function(){x.renderAll()}),$(document).on("change","#departmentFilter",function(){x.renderAll()})},init:()=>{x.renderAll(),x.handleSearch()}};window.ReadHandler=x;var A={handleEditClick:()=>{$(document).on("click",".edit-btn",function(){let e=parseInt($(this).data("id")),t=DataService.getEmployeeById(e);if(!t){AlertComponent.showToast("Data tidak ditemukan","error");return}ModalComponent.openEditModal(t)})},handleUpdateSubmit:()=>{$(document).on("submit","#employeeForm",function(e){e.preventDefault();let t=$("#employeeId").val();if(!t)return;let n=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(n)&&(LoadingComponent.show("Memperbarui data karyawan..."),setTimeout(()=>{if(!DataService.updateEmployee(parseInt(t),n)){AlertComponent.showToast("Gagal memperbarui data","error"),LoadingComponent.hide();return}ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil diperbarui","success"),LoadingComponent.hide()},600))})},init:()=>{A.handleEditClick(),A.handleUpdateSubmit()}};window.UpdateHandler=A;var I={handleDeleteClick:()=>{$(document).on("click",".delete-btn",function(){let e=parseInt($(this).data("id"));ConfirmComponent.show({title:"Hapus karyawan?",message:"Data yang dihapus tidak bisa dikembalikan lagi. Lanjut hapus data ini?",confirmText:"Ya, hapus",cancelText:"Batal"}).then(t=>{t&&(LoadingComponent.show("Menghapus data..."),setTimeout(()=>{if(!DataService.deleteEmployee(e)){AlertComponent.showToast("Gagal menghapus data","error"),LoadingComponent.hide();return}ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil dihapus","success"),LoadingComponent.hide()},600))})})},init:()=>{I.handleDeleteClick()}};window.DeleteHandler=I;$(function(){if(LoadingComponent.show("Menyiapkan dashboard..."),ModalComponent.init(),CreateHandler.init(),typeof window.MultiSelectComponent!="undefined"&&typeof window.MultiSelectComponent.init=="function")try{window.MultiSelectComponent.init()}catch(t){console.error("Department filter multiselect init failed:",t)}ReadHandler.init(),UpdateHandler.init(),DeleteHandler.init();let e=()=>{typeof window.lucide!="undefined"&&typeof window.lucide.createIcons=="function"&&window.lucide.createIcons()};e(),window.addEventListener("load",e,{once:!0}),requestAnimationFrame(()=>{LoadingComponent.hide()})});})();
