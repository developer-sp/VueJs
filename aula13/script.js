let app = new Vue({
	el:'#app',
	data:{
		primeiroNome:'',
		segundoNome:'', 
		nomeCompleto:''


		
	},
	computed:{
		nomeCompleto:function() {
			return this.primeiroNome+' '+this.segundoNome;
		
		}
	}
	watch:{
		primeiroNome:function() {
			this.nomeCompleto = this.primeiroNome+' '+this.segundoNome;
		},
		segundoNome:function(valor) {
			this.nomeCompleto = this.primeiroNome+' '+this.segundoNome;

		}
	}
});