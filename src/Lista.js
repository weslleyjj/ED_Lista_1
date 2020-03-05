class Node {
	constructor(dado) {
		this.dado = dado;
		this.proximo = null;
	}
}

class Lista {
	constructor() {
		this.head = new Node(null);
	}


	add(dado) {
		let novo_no = new Node(dado);

		novo_no.proximo = this.head.proximo;
		this.head.proximo = novo_no;
	}

	append(dado) {

		let novo_no = new Node(dado);

		if (this.head.proximo == null) {
			this.head.proximo = novo_no;
		} else {
			let atual = this.head.proximo;
			while (atual.proximo != null) {
				atual = atual.proximo;
			}
			atual.proximo = novo_no;
		}
	}

	removeBeginning() {

		let atual = this.head.proximo;
		if (atual === null) {
			return;
		} else {
			this.head.proximo = atual.proximo;
		}

	}

	removeEnd() {
		let anterior = this.head;
		let atual = this.head.proximo;

		if (atual == null) {
			return;
		}

		while (atual.proximo != null) {
			anterior = atual;
			atual = atual.proximo;
		}
		atual = null;
		anterior.proximo = null;
	}

	isEmpty() {
		return this.head.proximo === null;
	}

	toString() {
		let atual = this.head.proximo;
		let texto = '';

		while (atual != null) {
			texto += atual.dado + (atual.proximo ? '->' : '');
			atual = atual.proximo;
		}

		return texto;
	}

	size() {
		let cont = 0;
		let atual = this.head.proximo;

		while (atual != null) {
			atual = atual.proximo;
			cont++;
		}
		return cont;
	}

	addAt(posicao, dado) {

		if (posicao >= this.size()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;

				let anterior = this.head;
				let atual = this.head.proximo;

				while (i != posicao) {
					//iteração
					anterior = atual;
					atual = atual.proximo;
					i++;
				}
				anterior.proximo = novo_no;
				novo_no.proximo = atual;
			}

		}
	}

	search(dado) {

		if (this.head.proximo == null) {
			return false;
		} else {
			let atual = this.head.proximo;
			while (atual != null) {
				if (atual.dado == dado) {
					return true;
				}
				//iteração
				atual = atual.proximo;
			}
			return false;
		}
	}

	addInOrder(dado) {

		//NOTA: Essa função deve ser usada apenas se os elementos já existentes
		//na lista estiverem em ordem crescente.

		let novo_no = new Node(dado);

		if (this.head.proximo == null) {
			this.head.proximo = novo_no;
		} else {

			let anterior = this.head;
			let atual = this.head.proximo;

			while (atual != null) {
				if (atual.dado > dado) {
					anterior.proximo = novo_no;
					novo_no.proximo = atual;
					return;
				}
				//iteração
				anterior = atual;
				atual = atual.proximo;
			}

			//caso o if nunca seja true
			anterior.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}

	}
}

export default Lista;