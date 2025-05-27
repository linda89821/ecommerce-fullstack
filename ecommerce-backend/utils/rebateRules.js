// utils/rebateRules.js

const rebateRules = [
  { threshold: 1000, percent: 0.15, vip: "VIP2" },
  { threshold: 100, percent: 0.10, vip: "VIP1" },
  { threshold: 50, percent: 0.05, vip: null }
];

// based on the purchase amount to determine the VIP status
function calculateRebate(amount) {
  for (let rule of rebateRules) {
    if (amount >= rule.threshold) {
      return {
        rebateAmount: parseFloat((amount * rule.percent).toFixed(2)),
        vipLevel: rule.vip
      };
    }
  }
  return { rebateAmount: 0, vipLevel: null };
}

module.exports = { calculateRebate };
