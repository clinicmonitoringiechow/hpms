let data = JSON.parse(localStorage.getItem("pasien")) || [];

function tampilkanData(){

let tabel = document.getElementById("dataPasien");
tabel.innerHTML="";

data.forEach((item,index)=>{

tabel.innerHTML += `
<tr>
<td>${item.nama}</td>
<td>${item.nik}</td>
<td>${item.layanan}</td>
<td>${item.hiv}</td>
<td>${item.sifilis}</td>
<td>${item.hepatitis}</td>
<td><button onclick="hapusData(${index})">Hapus</button></td>
</tr>
`;

});
}

function tambahData(){

let pasien = {
tanggal_register: document.getElementById("tanggal_register").value,
no_kk: document.getElementById("no_kk").value,
nik: document.getElementById("nik").value,
no_rm: document.getElementById("no_rm").value,
nama: document.getElementById("nama").value,
tempat_lahir: document.getElementById("tempat_lahir").value,
tanggal_lahir: document.getElementById("tanggal_lahir").value,
jk: document.getElementById("jk").value,
pendidikan: document.getElementById("pendidikan").value,
pekerjaan: document.getElementById("pekerjaan").value,
rujukan: document.getElementById("rujukan").value,
alamat: document.getElementById("alamat").value,
hp: document.getElementById("hp").value,
email: document.getElementById("email").value,
bpjs: document.getElementById("bpjs").value,
suku: document.getElementById("suku").value,
alasan: document.getElementById("alasan").value,
layanan: document.getElementById("layanan").value,
populasi: document.getElementById("populasi").value,
hiv: document.getElementById("hasil_hiv").value,
sifilis: document.getElementById("hasil_sifilis").value,
hepatitis: document.getElementById("hasil_hepatitis").value
};

data.push(pasien);

localStorage.setItem("pasien", JSON.stringify(data));

tampilkanData();
}

function hapusData(index){
data.splice(index,1);
localStorage.setItem("pasien", JSON.stringify(data));
tampilkanData();
}

tampilkanData();