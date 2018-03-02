$(document).ready(function(){


new Vue ({
	el: '#app',
	data: {

		unitCost1: '1000',	
		qtyOrHourly1: '25',
		unitCost2: '200',
		qtyOrHourly2: '15'

	},
		methods: {
		toCommaNumber: function(num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},
	computed: {
		invoiceTotal: function() {
			var number = (this.unitCost1 * this.qtyOrHourly1) + (this.unitCost2 * this.qtyOrHourly2);
			return this.toCommaNumber(Number(number).toFixed(2));
		},
		line1: function(){
			var line =  this.unitCost1*this.qtyOrHourly1;
				return this.toCommaNumber(Number(line).toFixed(2));
		},
		line2: function(){
			var line = this.unitCost2 * this.qtyOrHourly2;
			return this.toCommaNumber(Number(line).toFixed(2));
		},
	},


});

});
