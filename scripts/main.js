$("#decrypt").click(function() {
  const decryptor = new cryptographer();

  $("#resultBox").html(decryptor.decryptText($("#inputBox").val()));
});

$("#encrypt").click(function() {
  const encryptor = new cryptographer();

  $("#resultBox").html(encryptor.encryptText($("#inputBox").val()));
});
