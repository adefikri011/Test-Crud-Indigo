(()=>{var F={name:"Employee Management System",version:"1.0.0",author:"INDOGO Test",storage:{employees:"indogo_employees"},departments:["IT","HR","Finance","Marketing","Operations"],currency:{symbol:"Rp",locale:"id-ID"}};window.APP_CONFIG=F;var H={set:(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error("Error saving to localStorage:",n),!1}},get:e=>{try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error reading from localStorage:",t),null}},remove:e=>{try{return localStorage.removeItem(e),!0}catch(t){return console.error("Error removing from localStorage:",t),!1}},clearAll:()=>{try{return localStorage.clear(),!0}catch(e){return console.error("Error clearing localStorage:",e),!1}}};window.StorageHelper=H;var y={validateEmployeeForm:e=>{let t=!0;return y.clearErrors(),(!e.name||e.name.trim()==="")&&(y.showError("nameError"),t=!1),(!e.email||!y.isValidEmail(e.email))&&(y.showError("emailError"),t=!1),(!e.position||e.position.trim()==="")&&(y.showError("positionError"),t=!1),(!e.department||e.department.trim()==="")&&(y.showError("departmentError"),t=!1),(!e.salary||parseFloat(e.salary)<=0)&&(y.showError("salaryError"),t=!1),(!e.joinDate||e.joinDate.trim()==="")&&(y.showError("joinDateError"),t=!1),t},isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),showError:e=>{$("#"+e).removeClass("hidden")},clearErrors:()=>{$("#employeeForm p[id$='Error']").addClass("hidden")},getFormData:()=>({name:$("#name").val().trim(),email:$("#email").val().trim(),position:$("#position").val().trim(),department:$("#department").val(),salary:$("#salary").val(),joinDate:$("#joinDate").val()}),resetForm:()=>{$("#employeeForm")[0].reset(),$("#employeeId").val(""),y.clearErrors()}};window.ValidationHelper=y;var S={renderTable:e=>{let t=$("#employeeTableBodyDesktop"),n=$("#employeeCardContainer");if(t.empty(),n.empty(),!e||e.length===0){t.append(`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `),n.append(`
      <div class="text-center text-slate-500 py-10">
        Belum ada data karyawan.
      </div>
    `);return}e.forEach((a,r)=>{let i=`
      <tr class="hover:bg-slate-50 transition">
        <td class="px-6 py-4 text-sm">${r+1}</td>
        <td class="px-6 py-4 text-sm font-medium">${a.name}</td>
        <td class="px-6 py-4 text-sm">${a.email}</td>
        <td class="px-6 py-4 text-sm">${a.position}</td>
        <td class="px-6 py-4 text-sm">${a.department}</td>
        <td class="px-6 py-4 text-sm">${S.formatCurrency(a.salary)}</td>
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
    `;t.append(i);let o=`
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
          <p><strong>Gaji:</strong> ${S.formatCurrency(a.salary)}</p>
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
    `;n.append(o)})},getEmptyStateRow:()=>`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `,formatCurrency:e=>{let t=parseFloat(e)||0;return new Intl.NumberFormat(APP_CONFIG.currency.locale,{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t)},updateSummary:()=>{let e=DataService.getStatistics();$("#totalEmployees").text(e.totalEmployees),$("#totalDepartments").text(e.totalDepartments),$("#averageSalary").text(S.formatCurrency(e.averageSalary))}};window.TableComponent=S;var A={openCreateModal:()=>{$("#modalTitle").text("Tambah Karyawan"),$("#submitBtn").text("Simpan"),ValidationHelper.resetForm(),window.MultiSelectComponent&&typeof window.MultiSelectComponent.syncModalDepartmentSelect=="function"&&window.MultiSelectComponent.syncModalDepartmentSelect(),$("#employeeModal").removeClass("hidden").addClass("flex")},openEditModal:e=>{$("#modalTitle").text("Edit Karyawan"),$("#submitBtn").text("Update"),$("#employeeId").val(e.id),$("#name").val(e.name),$("#email").val(e.email),$("#position").val(e.position),$("#department").val(e.department),$("#salary").val(e.salary),$("#joinDate").val(e.joinDate),window.MultiSelectComponent&&typeof window.MultiSelectComponent.syncModalDepartmentSelect=="function"&&window.MultiSelectComponent.syncModalDepartmentSelect(),$("#employeeModal").removeClass("hidden").addClass("flex")},closeModal:()=>{$("#employeeModal").removeClass("flex").addClass("hidden"),ValidationHelper.resetForm()},init:()=>{$(document).on("click","#closeModal",function(){A.closeModal()}),$(document).on("click","#cancelBtn",function(){A.closeModal()}),$(document).on("click","#employeeModal",function(e){e.target.id==="employeeModal"&&A.closeModal()})}};window.ModalComponent=A;var D={successSoundPath:"assets/sounds/success.mp3",setSuccessSoundPath:e=>{D.successSoundPath=e},playSuccess:()=>{if(!D.successSoundPath)return;let e=new Audio(D.successSoundPath);e.volume=.35,e.play().catch(()=>{})}};window.SoundComponent=D;var T={showToast:(e,t="success")=>{t==="success"&&window.SoundComponent&&typeof SoundComponent.playSuccess=="function"&&SoundComponent.playSuccess();let n="toast-"+Date.now(),r=`
      <div id="${n}" 
           class="text-white px-5 py-3 rounded-xl shadow-lg ${{success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600"}[t]} 
                  animate-fadeIn transition flex items-center justify-between gap-4">

        <span class="text-sm font-medium">${e}</span>

        <button class="text-white hover:opacity-80" onclick="$('#${n}').remove()">
          \u2715
        </button>
      </div>
    `;$("#toastContainer").append(r),setTimeout(()=>{$("#"+n).fadeOut(300,function(){$(this).remove()})},3e3)}};window.AlertComponent=T;var B={show:(e="Memuat data...")=>{$("#loadingText").text(e),$("#globalLoading").removeClass("hidden").addClass("flex")},hide:()=>{$("#globalLoading").removeClass("flex").addClass("hidden")}};window.LoadingComponent=B;var w={resolver:null,ensureDialog:()=>{if(document.getElementById("confirmDeleteOverlay"))return;document.body.insertAdjacentHTML("beforeend",`
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
    `)},hide:()=>{let e=document.getElementById("confirmDeleteOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex")),w.resolver=null},show:({title:e,message:t,confirmText:n,cancelText:a})=>{w.ensureDialog();let r=document.getElementById("confirmDeleteOverlay"),i=document.getElementById("confirmDeleteTitle"),o=document.getElementById("confirmDeleteMessage"),c=document.getElementById("confirmDeleteAction"),h=document.getElementById("confirmDeleteCancel");return i&&e&&(i.textContent=e),o&&t&&(o.textContent=t),c&&n&&(c.textContent=n),h&&a&&(h.textContent=a),r.classList.remove("hidden"),r.classList.add("flex"),new Promise(p=>{w.resolver=p;let s=()=>{w.hide(),p(!1)},d=()=>{w.hide(),p(!0)},m=b=>{b.target===r&&s()},v=b=>{b.key==="Escape"&&s()};h.onclick=s,c.onclick=d,r.onclick=m,document.addEventListener("keydown",v,{once:!0})})}};window.ConfirmComponent=w;var g={modalDepartmentState:null,initDepartmentFilter:()=>{let e=document.getElementById("departmentFilter");if(!e||e.dataset.multiselectInitialized==="true")return;e.dataset.multiselectInitialized="true",e.multiple=!0;let t=e.querySelector('option[value=""]');t&&t.remove(),e.classList.add("department-multi-native");let n=document.createElement("div");n.id="departmentFilterCustom",n.className="department-multi";let a=document.createElement("button");a.type="button",a.className="department-multi-trigger",a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false");let r=document.createElement("span");r.className="department-multi-label",r.textContent="Semua Departemen";let i=document.createElement("span");i.className="department-multi-caret",i.setAttribute("aria-hidden","true"),i.textContent="\u25BE";let o=document.createElement("div");o.className="department-multi-menu",o.id="departmentFilterCustomMenu",o.setAttribute("role","group");let c=document.querySelector('label[for="departmentFilter"]');c?(c.id||(c.id="departmentFilterLabel"),o.setAttribute("aria-labelledby",c.id),a.setAttribute("aria-labelledby",c.id)):(o.setAttribute("aria-label","Filter Departemen"),a.setAttribute("aria-label","Filter Departemen")),a.setAttribute("aria-controls",o.id);let h=document.createElement("div");h.className="department-multi-actions";let p=document.createElement("button");p.type="button",p.className="department-multi-action-btn",p.textContent="Pilih Semua";let s=document.createElement("button");s.type="button",s.className="department-multi-action-btn",s.textContent="Reset",h.append(p,s),o.appendChild(h),Array.from(e.options).forEach(l=>{let u=document.createElement("label");u.className="department-multi-item";let x=document.createElement("input");x.type="checkbox",x.className="department-multi-checkbox",x.value=l.value,x.checked=l.selected;let E=document.createElement("span");E.className="department-multi-item-text",E.textContent=l.text,u.append(x,E),o.appendChild(u)}),a.append(r,i),n.append(a,o),e.insertAdjacentElement("afterend",n);let d=()=>{let l=[],u=Array.from(o.querySelectorAll(".department-multi-checkbox"));if(Array.from(o.querySelectorAll(".department-multi-checkbox:checked")).forEach(x=>{var L;let E=(L=x.closest("label"))==null?void 0:L.querySelector(".department-multi-item-text");E&&l.push(E.textContent||"")}),l.length===0){r.textContent="Semua Departemen";return}if(l.length===u.length&&u.length>0){r.textContent="Semua Departemen";return}if(l.length<=2){r.textContent=l.join(", ");return}r.textContent=`${l.slice(0,2).join(", ")} +${l.length-2}`},m=()=>{n.classList.remove("is-open"),a.setAttribute("aria-expanded","false")},v=()=>{n.classList.add("is-open"),a.setAttribute("aria-expanded","true")},b=()=>{let l=Array.from(o.querySelectorAll(".department-multi-checkbox:checked")).map(u=>u.value);Array.from(e.options).forEach(u=>{u.selected=l.includes(u.value)}),e.dispatchEvent(new Event("change",{bubbles:!0})),d()};a.addEventListener("click",()=>{n.classList.contains("is-open")?m():v()}),o.addEventListener("change",l=>{l.target instanceof HTMLInputElement&&l.target.classList.contains("department-multi-checkbox")&&b()}),p.addEventListener("click",()=>{Array.from(o.querySelectorAll(".department-multi-checkbox")).forEach(l=>{l.checked=!0}),b()}),s.addEventListener("click",()=>{Array.from(o.querySelectorAll(".department-multi-checkbox")).forEach(l=>{l.checked=!1}),b()}),document.addEventListener("click",l=>{l.target instanceof Element&&(l.target.closest("#departmentFilterCustom")||m())}),document.addEventListener("keydown",l=>{l.key==="Escape"&&m()}),d()},initModalDepartmentSelect:()=>{let e=document.getElementById("department");if(!e||e.dataset.customSingleInitialized==="true")return;e.dataset.customSingleInitialized="true",e.classList.add("department-single-native");let t=document.createElement("div");t.id="departmentCustomSingle",t.className="department-single";let n=document.createElement("button");n.type="button",n.className="department-single-trigger",n.setAttribute("aria-haspopup","listbox"),n.setAttribute("aria-expanded","false");let a=document.createElement("span");a.className="department-single-label";let r=document.createElement("span");r.className="department-single-caret",r.setAttribute("aria-hidden","true"),r.textContent="\u25BE";let i=document.createElement("div");i.className="department-single-menu",i.id="departmentCustomSingleMenu",i.setAttribute("role","listbox");let o=document.querySelector('label[for="department"]');o?(o.id||(o.id="departmentModalLabel"),i.setAttribute("aria-labelledby",o.id),n.setAttribute("aria-labelledby",o.id)):(i.setAttribute("aria-label","Departemen"),n.setAttribute("aria-label","Departemen")),n.setAttribute("aria-controls",i.id),Array.from(e.options).forEach(s=>{let d=document.createElement("button");d.type="button",d.className="department-single-option",d.dataset.value=s.value,d.textContent=s.text,d.setAttribute("role","option"),d.setAttribute("aria-selected","false"),s.value||d.classList.add("is-placeholder"),i.appendChild(d)}),n.append(a,r),t.append(n,i),e.insertAdjacentElement("afterend",t);let c=()=>{t.classList.remove("is-open"),n.setAttribute("aria-expanded","false")},h=()=>{t.classList.add("is-open"),n.setAttribute("aria-expanded","true")},p=()=>{let s=e.value||"",d=Array.from(e.options).find(m=>m.value===s);a.textContent=d?d.text:"Pilih Departemen",n.classList.toggle("is-empty",!s),Array.from(i.querySelectorAll(".department-single-option")).forEach(m=>{let v=m instanceof HTMLButtonElement&&m.dataset.value===s;m.classList.toggle("is-selected",v),m.setAttribute("aria-selected",v?"true":"false")})};n.addEventListener("click",()=>{t.classList.contains("is-open")?c():h()}),i.addEventListener("click",s=>{let d=s.target;if(!(d instanceof Element))return;let m=d.closest(".department-single-option");m instanceof HTMLButtonElement&&(e.value=m.dataset.value||"",e.dispatchEvent(new Event("change",{bubbles:!0})),p(),c())}),document.addEventListener("click",s=>{s.target instanceof Element&&(s.target.closest("#departmentCustomSingle")||c())}),document.addEventListener("keydown",s=>{s.key==="Escape"&&c()}),e.addEventListener("change",p),g.modalDepartmentState={sync:p,close:c},p()},syncModalDepartmentSelect:()=>{if(g.modalDepartmentState&&typeof g.modalDepartmentState.sync=="function"){g.modalDepartmentState.sync();return}g.initModalDepartmentSelect()},init:()=>{g.initDepartmentFilter(),g.initModalDepartmentSelect()}};window.MultiSelectComponent=g;var f={getAllEmployees:()=>StorageHelper.get(APP_CONFIG.storage.employees)||[],saveEmployees:e=>{StorageHelper.set(APP_CONFIG.storage.employees,e)},addEmployee:e=>{let t=f.getAllEmployees(),n={...e,id:Date.now()+Math.floor(Math.random()*1e3),createdAt:new Date().toISOString()};return t.push(n),f.saveEmployees(t),n},getEmployeeById:e=>f.getAllEmployees().find(n=>n.id===e)||null,updateEmployee:(e,t)=>{let n=f.getAllEmployees(),a=n.findIndex(r=>r.id===e);return a===-1?null:(n[a]={...n[a],...t,updatedAt:new Date().toISOString()},f.saveEmployees(n),n[a])},deleteEmployee:e=>{let t=f.getAllEmployees(),n=t.filter(a=>a.id!==e);return t.length===n.length?!1:(f.saveEmployees(n),!0)},searchEmployees:e=>{if(!e)return f.getAllEmployees();let t=f.getAllEmployees(),n=e.toLowerCase();return t.filter(a=>a.name.toLowerCase().includes(n)||a.email.toLowerCase().includes(n)||a.position.toLowerCase().includes(n)||a.department.toLowerCase().includes(n))},getStatistics:()=>{let e=f.getAllEmployees(),t=e.length,a=[...new Set(e.map(o=>o.department))].length,r=e.reduce((o,c)=>o+(parseFloat(c.salary)||0),0),i=t>0?Math.round(r/t):0;return{totalEmployees:t,totalDepartments:a,averageSalary:i}}};window.DataService=f;var k={handleOpenModal:()=>{$(document).on("click","#addEmployeeBtn",function(){ModalComponent.openCreateModal()})},handleSubmit:()=>{$(document).on("submit","#employeeForm",function(e){if(e.preventDefault(),$("#employeeId").val())return;let n=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(n)&&(LoadingComponent.show("Menyimpan data karyawan..."),setTimeout(()=>{DataService.addEmployee(n),ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Karyawan berhasil ditambahkan","success"),LoadingComponent.hide()},600))})},init:()=>{k.handleOpenModal(),k.handleSubmit()}};window.CreateHandler=k;var C={getFilteredEmployees:()=>{let e=$("#searchInput").val()||"",t=$("#departmentFilter").val(),n=Array.isArray(t)?t.filter(Boolean):t?[t]:[],a=DataService.searchEmployees(e);return n.length===0?a:a.filter(r=>n.includes(r.department))},renderAll:()=>{let e=C.getFilteredEmployees();TableComponent.renderTable(e),TableComponent.updateSummary()},handleSearch:()=>{$(document).on("input","#searchInput",function(){C.renderAll()}),$(document).on("change","#departmentFilter",function(){C.renderAll()})},init:()=>{C.renderAll(),C.handleSearch()}};window.ReadHandler=C;var M={handleEditClick:()=>{$(document).on("click",".edit-btn",function(){let e=parseInt($(this).data("id")),t=DataService.getEmployeeById(e);if(!t){AlertComponent.showToast("Data tidak ditemukan","error");return}ModalComponent.openEditModal(t)})},handleUpdateSubmit:()=>{$(document).on("submit","#employeeForm",function(e){e.preventDefault();let t=$("#employeeId").val();if(!t)return;let n=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(n)&&(LoadingComponent.show("Memperbarui data karyawan..."),setTimeout(()=>{if(!DataService.updateEmployee(parseInt(t),n)){AlertComponent.showToast("Gagal memperbarui data","error"),LoadingComponent.hide();return}ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil diperbarui","success"),LoadingComponent.hide()},600))})},init:()=>{M.handleEditClick(),M.handleUpdateSubmit()}};window.UpdateHandler=M;var I={handleDeleteClick:()=>{$(document).on("click",".delete-btn",function(){let e=parseInt($(this).data("id"));ConfirmComponent.show({title:"Hapus karyawan?",message:"Data yang dihapus tidak bisa dikembalikan lagi. Lanjut hapus data ini?",confirmText:"Ya, hapus",cancelText:"Batal"}).then(t=>{t&&(LoadingComponent.show("Menghapus data..."),setTimeout(()=>{if(!DataService.deleteEmployee(e)){AlertComponent.showToast("Gagal menghapus data","error"),LoadingComponent.hide();return}ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil dihapus","success"),LoadingComponent.hide()},600))})})},init:()=>{I.handleDeleteClick()}};window.DeleteHandler=I;$(function(){let e=!1,t=()=>{if(e)return;e=!0,LoadingComponent.show("Menyiapkan dashboard..."),ReadHandler.init();let n=()=>{if(ModalComponent.init(),CreateHandler.init(),UpdateHandler.init(),DeleteHandler.init(),typeof window.MultiSelectComponent!="undefined"&&typeof window.MultiSelectComponent.init=="function")try{window.MultiSelectComponent.init()}catch(a){console.error("Department filter multiselect init failed:",a)}};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(n,{timeout:1200}):setTimeout(n,120),requestAnimationFrame(()=>{LoadingComponent.hide()})};if(window.__APP_PARTIALS_READY__===!0){t();return}window.addEventListener("app:partials-ready",t,{once:!0})});})();
