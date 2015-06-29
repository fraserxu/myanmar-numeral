var NUMBERS_MY = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

module.exports = function(numbers) {
  if (numbers === 0)
    return '๐';
  else
    return numbers.toString().split('').map(function(d) {return NUMBERS_MY[d]}).join('');
}
