(()=>{var D={name:"Employee Management System",version:"1.0.0",author:"INDOGO Test",storage:{employees:"indogo_employees"},departments:["IT","HR","Finance","Marketing","Operations"],currency:{symbol:"Rp",locale:"id-ID"}};window.APP_CONFIG=D;var k={set:(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(a){return console.error("Error saving to localStorage:",a),!1}},get:e=>{try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error reading from localStorage:",t),null}},remove:e=>{try{return localStorage.removeItem(e),!0}catch(t){return console.error("Error removing from localStorage:",t),!1}},clearAll:()=>{try{return localStorage.clear(),!0}catch(e){return console.error("Error clearing localStorage:",e),!1}}};window.StorageHelper=k;var s={validateEmployeeForm:e=>{let t=!0;return s.clearErrors(),(!e.name||e.name.trim()==="")&&(s.showError("nameError"),t=!1),(!e.email||!s.isValidEmail(e.email))&&(s.showError("emailError"),t=!1),(!e.position||e.position.trim()==="")&&(s.showError("positionError"),t=!1),(!e.department||e.department.trim()==="")&&(s.showError("departmentError"),t=!1),(!e.salary||parseFloat(e.salary)<=0)&&(s.showError("salaryError"),t=!1),(!e.joinDate||e.joinDate.trim()==="")&&(s.showError("joinDateError"),t=!1),t},isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),showError:e=>{$("#"+e).removeClass("hidden")},clearErrors:()=>{$("#employeeForm p[id$='Error']").addClass("hidden")},getFormData:()=>({name:$("#name").val().trim(),email:$("#email").val().trim(),position:$("#position").val().trim(),department:$("#department").val(),salary:$("#salary").val(),joinDate:$("#joinDate").val()}),resetForm:()=>{$("#employeeForm")[0].reset(),$("#employeeId").val(""),s.clearErrors()}};window.ValidationHelper=s;var p={renderTable:e=>{let t=$("#employeeTableBodyDesktop"),a=$("#employeeCardContainer");if(t.empty(),a.empty(),!e||e.length===0){t.append(`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `),a.append(`
      <div class="text-center text-slate-500 py-10">
        Belum ada data karyawan.
      </div>
    `);return}e.forEach((o,n)=>{let d=`
      <tr class="hover:bg-slate-50 transition">
        <td class="px-6 py-4 text-sm">${n+1}</td>
        <td class="px-6 py-4 text-sm font-medium">${o.name}</td>
        <td class="px-6 py-4 text-sm">${o.email}</td>
        <td class="px-6 py-4 text-sm">${o.position}</td>
        <td class="px-6 py-4 text-sm">${o.department}</td>
        <td class="px-6 py-4 text-sm text-right">
          ${p.formatCurrency(o.salary)}
        </td>
        <td class="px-6 py-4 text-sm">${o.joinDate}</td>
        <td class="px-6 py-4 text-center text-sm">
          <button class="edit-btn text-blue-600 mr-3" data-id="${o.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600" data-id="${o.id}">
            Delete
          </button>
        </td>
      </tr>
    `;t.append(d);let l=`
      <div class="bg-slate-50 rounded-xl p-4 shadow-sm border border-slate-200">
        
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="font-semibold text-slate-900">${o.name}</h3>
            <p class="text-sm text-slate-500">${o.position}</p>
          </div>
          <span class="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-full">
            ${o.department}
          </span>
        </div>

        <div class="text-sm text-slate-600 space-y-1 mt-3">
          <p><strong>Email:</strong> ${o.email}</p>
          <p><strong>Gaji:</strong> ${p.formatCurrency(o.salary)}</p>
          <p><strong>Masuk:</strong> ${o.joinDate}</p>
        </div>

        <div class="flex justify-end gap-4 mt-4 text-sm">
          <button class="edit-btn text-blue-600 font-medium" data-id="${o.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600 font-medium" data-id="${o.id}">
            Delete
          </button>
        </div>

      </div>
    `;a.append(l)})},getEmptyStateRow:()=>`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `,formatCurrency:e=>{let t=parseFloat(e)||0;return new Intl.NumberFormat(APP_CONFIG.currency.locale,{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t)},updateSummary:()=>{let e=DataService.getStatistics();$("#totalEmployees").text(e.totalEmployees),$("#totalDepartments").text(e.totalDepartments),$("#averageSalary").text(p.formatCurrency(e.averageSalary))}};window.TableComponent=p;var u={openCreateModal:()=>{$("#modalTitle").text("Tambah Karyawan"),$("#submitBtn").text("Simpan"),ValidationHelper.resetForm(),$("#employeeModal").removeClass("hidden").addClass("flex")},openEditModal:e=>{$("#modalTitle").text("Edit Karyawan"),$("#submitBtn").text("Update"),$("#employeeId").val(e.id),$("#name").val(e.name),$("#email").val(e.email),$("#position").val(e.position),$("#department").val(e.department),$("#salary").val(e.salary),$("#joinDate").val(e.joinDate),$("#employeeModal").removeClass("hidden").addClass("flex")},closeModal:()=>{$("#employeeModal").removeClass("flex").addClass("hidden"),ValidationHelper.resetForm()},init:()=>{$(document).on("click","#closeModal",function(){u.closeModal()}),$(document).on("click","#cancelBtn",function(){u.closeModal()}),$(document).on("click","#employeeModal",function(e){e.target.id==="employeeModal"&&u.closeModal()})}};window.ModalComponent=u;var y={successSoundPath:"assets/sounds/success.mp3",setSuccessSoundPath:e=>{y.successSoundPath=e},playSuccess:()=>{if(!y.successSoundPath)return;let e=new Audio(y.successSoundPath);e.volume=.35,e.play().catch(()=>{})}};window.SoundComponent=y;var M={showToast:(e,t="success")=>{t==="success"&&window.SoundComponent&&typeof SoundComponent.playSuccess=="function"&&SoundComponent.playSuccess();let a="toast-"+Date.now(),n=`
      <div id="${a}" 
           class="text-white px-5 py-3 rounded-xl shadow-lg ${{success:"bg-green-600",error:"bg-red-600",info:"bg-blue-600"}[t]} 
                  animate-fadeIn transition flex items-center justify-between gap-4">

        <span class="text-sm font-medium">${e}</span>

        <button class="text-white hover:opacity-80" onclick="$('#${a}').remove()">
          \u2715
        </button>
      </div>
    `;$("#toastContainer").append(n),setTimeout(()=>{$("#"+a).fadeOut(300,function(){$(this).remove()})},3e3)}};window.AlertComponent=M;var I={show:(e="Memuat data...")=>{$("#loadingText").text(e),$("#globalLoading").removeClass("hidden").addClass("flex")},hide:()=>{$("#globalLoading").removeClass("flex").addClass("hidden")}};window.LoadingComponent=I;var i={resolver:null,ensureDialog:()=>{if(document.getElementById("confirmDeleteOverlay"))return;document.body.insertAdjacentHTML("beforeend",`
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
    `)},hide:()=>{let e=document.getElementById("confirmDeleteOverlay");e&&(e.classList.add("hidden"),e.classList.remove("flex")),i.resolver=null},show:({title:e,message:t,confirmText:a,cancelText:o})=>{i.ensureDialog();let n=document.getElementById("confirmDeleteOverlay"),d=document.getElementById("confirmDeleteTitle"),l=document.getElementById("confirmDeleteMessage"),c=document.getElementById("confirmDeleteAction"),h=document.getElementById("confirmDeleteCancel");return d&&e&&(d.textContent=e),l&&t&&(l.textContent=t),c&&a&&(c.textContent=a),h&&o&&(h.textContent=o),n.classList.remove("hidden"),n.classList.add("flex"),new Promise(g=>{i.resolver=g;let f=()=>{i.hide(),g(!1)},C=()=>{i.hide(),g(!0)},E=x=>{x.target===n&&f()},S=x=>{x.key==="Escape"&&f()};h.onclick=f,c.onclick=C,n.onclick=E,document.addEventListener("keydown",S,{once:!0})})}};window.ConfirmComponent=i;var r={getAllEmployees:()=>StorageHelper.get(APP_CONFIG.storage.employees)||[],saveEmployees:e=>{StorageHelper.set(APP_CONFIG.storage.employees,e)},addEmployee:e=>{let t=r.getAllEmployees(),a={...e,id:Date.now()+Math.floor(Math.random()*1e3),createdAt:new Date().toISOString()};return t.push(a),r.saveEmployees(t),a},getEmployeeById:e=>r.getAllEmployees().find(a=>a.id===e)||null,updateEmployee:(e,t)=>{let a=r.getAllEmployees(),o=a.findIndex(n=>n.id===e);return o===-1?null:(a[o]={...a[o],...t,updatedAt:new Date().toISOString()},r.saveEmployees(a),a[o])},deleteEmployee:e=>{let t=r.getAllEmployees(),a=t.filter(o=>o.id!==e);return t.length===a.length?!1:(r.saveEmployees(a),!0)},searchEmployees:e=>{if(!e)return r.getAllEmployees();let t=r.getAllEmployees(),a=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().includes(a)||o.email.toLowerCase().includes(a)||o.position.toLowerCase().includes(a)||o.department.toLowerCase().includes(a))},getStatistics:()=>{let e=r.getAllEmployees(),t=e.length,o=[...new Set(e.map(l=>l.department))].length,n=e.reduce((l,c)=>l+(parseFloat(c.salary)||0),0),d=t>0?Math.round(n/t):0;return{totalEmployees:t,totalDepartments:o,averageSalary:d}}};window.DataService=r;var v={handleOpenModal:()=>{$(document).on("click","#addEmployeeBtn",function(){ModalComponent.openCreateModal()})},handleSubmit:()=>{$(document).on("submit","#employeeForm",function(e){if(e.preventDefault(),$("#employeeId").val())return;let a=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(a)&&(LoadingComponent.show("Menyimpan data karyawan..."),setTimeout(()=>{DataService.addEmployee(a),ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Karyawan berhasil ditambahkan","success"),LoadingComponent.hide()},600))})},init:()=>{v.handleOpenModal(),v.handleSubmit()}};window.CreateHandler=v;var m={getFilteredEmployees:()=>{let e=$("#searchInput").val()||"",t=$("#departmentFilter").val()||"",a=DataService.searchEmployees(e);return t?a.filter(o=>o.department===t):a},renderAll:()=>{let e=m.getFilteredEmployees();TableComponent.renderTable(e),TableComponent.updateSummary()},handleSearch:()=>{$(document).on("input","#searchInput",function(){m.renderAll()}),$(document).on("change","#departmentFilter",function(){m.renderAll()})},init:()=>{m.renderAll(),m.handleSearch()}};window.ReadHandler=m;var w={handleEditClick:()=>{$(document).on("click",".edit-btn",function(){let e=parseInt($(this).data("id")),t=DataService.getEmployeeById(e);if(!t){AlertComponent.showToast("Data tidak ditemukan","error");return}ModalComponent.openEditModal(t)})},handleUpdateSubmit:()=>{$(document).on("submit","#employeeForm",function(e){e.preventDefault();let t=$("#employeeId").val();if(!t)return;let a=ValidationHelper.getFormData();ValidationHelper.validateEmployeeForm(a)&&(LoadingComponent.show("Memperbarui data karyawan..."),setTimeout(()=>{if(!DataService.updateEmployee(parseInt(t),a)){AlertComponent.showToast("Gagal memperbarui data","error"),LoadingComponent.hide();return}ModalComponent.closeModal(),ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil diperbarui","success"),LoadingComponent.hide()},600))})},init:()=>{w.handleEditClick(),w.handleUpdateSubmit()}};window.UpdateHandler=w;var b={handleDeleteClick:()=>{$(document).on("click",".delete-btn",function(){let e=parseInt($(this).data("id"));ConfirmComponent.show({title:"Hapus karyawan?",message:"Data yang dihapus tidak bisa dikembalikan lagi. Lanjut hapus data ini?",confirmText:"Ya, hapus",cancelText:"Batal"}).then(t=>{t&&(LoadingComponent.show("Menghapus data..."),setTimeout(()=>{if(!DataService.deleteEmployee(e)){AlertComponent.showToast("Gagal menghapus data","error"),LoadingComponent.hide();return}ReadHandler.renderAll(),AlertComponent.showToast("Data berhasil dihapus","success"),LoadingComponent.hide()},600))})})},init:()=>{b.handleDeleteClick()}};window.DeleteHandler=b;$(function(){LoadingComponent.show("Menyiapkan dashboard..."),ModalComponent.init(),CreateHandler.init(),ReadHandler.init(),UpdateHandler.init(),DeleteHandler.init(),requestAnimationFrame(()=>{LoadingComponent.hide()})});})();
