const perkalianNilai = (request, h) => {
    const { nilai1, nilai2 } = request.payload;
    const hasilKali = nilai1 * nilai2;
    const response = h.response({
      status: 'success',
      message: 'Hasil perkalian yang didapatkan',
      data: {
        answer: hasilKali,
      },
    });
    response.code(201);
    return response;
};
 
const penambahanString = (request, h) => {
  const { namaDepan, namaBelakang } = request.payload;
  const namaKeluaran = `${namaDepan} ${namaBelakang}`;
  const response = h.response({
    status: 'success',
    message: 'Hasil penambahan string yang didapatkan',
    data: {
      answer: namaKeluaran,
    },
  });
  response.code(201);
  return response;
};
   
module.exports = {
  perkalianNilai,
  penambahanString,
};