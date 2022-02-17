function tax8() {
  const per8 = document.getElementById('totalPrice').value;
  document.getElementById('nontaxResult').textContent = Math.round(per8 / 1.08);
  console.log('税率8%の場合の税抜価格は ' + per8 + ' / 1.08 = ' + Math.round(per8 / 1.08));
  const defoltPrice8 = Math.round(per8 / 1.08);
  document.getElementById('prices').value = defoltPrice8;
}

function tax10() {
  const per10 = document.getElementById('totalPrice').value;
  document.getElementById('nontaxResult').textContent = Math.round(per10 / 1.1);
  console.log('税率10%の場合の税抜価格は ' + per10 + ' / 1.1 = ' +  Math.round(per10 / 1.1));
  const defoltPrice10 = Math.round(per10 / 1.1);
  document.getElementById('prices').value = defoltPrice10
}

function percent() {
  const price = document.getElementById('prices').value;
  const discount = document.getElementById('discounts').value;
  document.getElementById('tax').textContent = Math.round(price - (price * (discount * 0.01)));
  const taxin = Math.round(price - (price * (discount * 0.01)));
  document.getElementById('tax1').textContent = Math.round(taxin * 1.08);
  document.getElementById('tax2').textContent = Math.round(taxin * 1.1);
  console.log('税抜価格 = ' + price + ' - ( ' + price + ' * ( ' + discount + ' * ' + '0.01 )) = ' + taxin);
  console.log('税込価格(8%) = ' + taxin + ' * 1.08 = ' + Math.round(taxin * 1.08));
  console.log('税込価格(10%) = ' + taxin + ' * 1.1 = ' + Math.round(taxin * 1.1));
}

function wari() {
  const price = document.getElementById('prices').value;
  const discount = document.getElementById('discounts').value;
  document.getElementById('tax').textContent = Math.round(price * ((10 - discount) * 0.1));
  const taxin1 = Math.round(price * ((10 - discount) * 0.1));
  document.getElementById('tax1').textContent = Math.round(taxin1 * 1.08);
  document.getElementById('tax2').textContent = Math.round(taxin1 * 1.1);
  console.log('税抜価格 = ' + price + ' * (( 10 - ' + discount + ' ) * 0.1 ) = ' + taxin1);
  console.log('税込価格(8%) = ' + taxin1 + ' * 1.08 = ' + Math.round(taxin1 * 1.08));
  console.log('税込価格(10%) = ' + taxin1 + ' * 1.1 = ' + Math.round(taxin1 * 1.1));
}

function yen() {
  const price = document.getElementById('prices').value;
  const discount = document.getElementById('discounts').value;
  document.getElementById('tax').textContent = price - discount;
  const taxin2 = Math.round(price - discount);
  document.getElementById('tax1').textContent = Math.round(taxin2 * 1.08);
  document.getElementById('tax2').textContent = Math.round(taxin2 * 1.1);
  console.log('税抜価格 = ' + price + ' - ' + discount + ' = ' + taxin2);
  console.log('税込価格(8%) = ' + taxin2 + ' * 1.08 = ' + Math.round(taxin2 * 1.08));
  console.log('税込価格(10%) = ' + taxin2 + ' * 1.1 = ' + Math.round(taxin2 * 1.1));
}

function cl() {
  console.log('reload');
  location.reload();
}