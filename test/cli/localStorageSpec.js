describe('Given Presentation Local Storage', () => {
	describe('Given non persistent Local Storage', () => {
		let nameSpacedLocalStorage = Presentation.LocalStorageFactory.getStorage(false,'testingNamespacedLocalStorage');

		let globalLocalStorage = Presentation.LocalStorageFactory.getStorage(false);


		it('Can support namespaced local storage', () => {
			expect(nameSpacedLocalStorage).to.not.be.undefined;
		});

		it('Can support global local storage', () => {
			expect(globalLocalStorage).to.not.be.undefined;
		});

		describe('Given Namespaced Local Storage', () => {

			it('Can add an Item', () => {
				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				//console.debug("nameSpacedLocalStorage debug: " + nameSpacedLocalStorage.getItem("monkey") );

				expect(nameSpacedLocalStorage.getItem("monkey")).to.equal("bonobo");
				expect(nameSpacedLocalStorage.length()).to.equal(1);
			});

			xit('Can add a complex Item', () => {
				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", { color: "brown", age: 1, name: "Lance Link" });
				//console.debug("nameSpacedLocalStorage debug: " + nameSpacedLocalStorage.getItem("monkey") );

				expect(nameSpacedLocalStorage.getItem("monkey")).to.deep.equal({ color: "brown", age: 1, name: "Lance Link" });
				expect(nameSpacedLocalStorage.length()).to.equal(1);
			});

			it('Can get an Item', () => {
				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				expect(nameSpacedLocalStorage.getItem("monkey")).to.equal("bonobo");
			});

			it('Can remove an Item', () => {
				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				nameSpacedLocalStorage.removeItem("monkey");
				expect(nameSpacedLocalStorage.getItem("monkey")).to.equal(null);
				expect(nameSpacedLocalStorage.length()).to.equal(0);
			});

			it('Can add an Item as Array', () => {
				let array = [ "bonobo", "chimpanzee", "howler" ];
				nameSpacedLocalStorage.setItem("monkeys", array);
				expect(nameSpacedLocalStorage.getItem("monkeys")).to.deep.equal(array);
			});

			it('Can get an Item Array', () => {
				let array = [ "bonobo", "chimpanzee", "howler" ];
				nameSpacedLocalStorage.setItem("monkeys", array);
				let item = nameSpacedLocalStorage.getItem("monkeys");
				//console.debug("Array: " + item );
				expect(item.length).to.equal(3);
			});
		});


		describe('Given Global Local Storage', () => {

			it('Can add an Item', () => {

				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");

			});
			it('Can get an Item', () => {

				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");

			});
			it('Can remove an Item', () => {

				globalLocalStorage.setItem("donkey", "bonobo");
				globalLocalStorage.removeItem("donkey");
				expect(globalLocalStorage.getItem("donkey")).to.equal(null);

			});

			it('Can add an Item as Array', () => {

				let array = [ "bonobo", "chimpanzee", "howler" ];

				globalLocalStorage.setItem("donkeys", array);

				expect(globalLocalStorage.getItem("donkeys")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkeys");

			});

			it('Can get an Item Array', () => {

				let array = [ "bonobo", "chimpanzee", "howler" ];

				globalLocalStorage.setItem("donkeys", array);

				let item = globalLocalStorage.getItem("donkeys");

				//console.log("Array: " + item );

				expect(item.length).to.equal(3);
				globalLocalStorage.removeItem("donkeys");
			});
			/*
			it('Can add an Item as Map', () => {
				let map = new Augmented.Utility.Map();
				map.set("name", "Bob");
				map.set("age", 36);
				map.set("height", "6.0\"");

				globalLocalStorage.setItem("myMap", map);
				let otherMap = new Augmented.Utility.Map();
				otherMap.marshall(globalLocalStorage.getItem("myMap"));
				expect(globalLocalStorage.getItem("myMap")).to.deep.equal(map.toJSON());
				expect(otherMap.toJSON()).to.deep.equal(map.toJSON());
				globalLocalStorage.removeItem("myMap");
			});
			*/
		});
	});
	describe('Given persistent Local Storage', () => {
		let nameSpacedLocalStorage = Presentation.LocalStorageFactory.getStorage(true,'testingPersistentNamespacedLocalStorage');

		let globalLocalStorage = Presentation.LocalStorageFactory.getStorage(true);


		it('Can support persistent namespaced local storage', () => {
			expect(nameSpacedLocalStorage).to.not.be.undefined;
		});

		it('Can support persistent global local storage', () => {
			expect(globalLocalStorage).to.not.be.undefined;
		});

		describe('Given persistent Namespaced Local Storage', () => {

			it('Can add an Item', () => {

				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				expect(nameSpacedLocalStorage.getItem("monkey")).to.not.be.undefined;
				expect(nameSpacedLocalStorage.length()).to.equal(1);
			});

			it('Can get an Item', () => {

				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				expect(nameSpacedLocalStorage.getItem("monkey")).to.not.be.undefined;

			});

			it('Can remove an Item', () => {

				nameSpacedLocalStorage.clear();
				nameSpacedLocalStorage.setItem("monkey", "bonobo");
				nameSpacedLocalStorage.removeItem("monkey");
				expect(nameSpacedLocalStorage.getItem("monkey")).to.equal(null);
				expect(nameSpacedLocalStorage.length()).to.equal(0);
			});

			it('Can add an Item as Array', () => {

				let array = [ "bonobo", "chimpanzee", "howler" ];

				nameSpacedLocalStorage.setItem("monkeys", array);

				expect(nameSpacedLocalStorage.getItem("monkeys")).to.not.be.undefined;
			});

			it('Can get an Item Array', () => {

				let array = [ "bonobo", "chimpanzee", "howler" ];

				nameSpacedLocalStorage.setItem("monkeys", array);

				let item = nameSpacedLocalStorage.getItem("monkeys");

				//console.log("Array: " + item );

				expect(item.length).to.equal(3);
				nameSpacedLocalStorage.removeItem("monkeys");
			});


		});


		describe('Given persistent Global Local Storage', () => {

			it('Can add an Item', () => {

				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");

			});
			it('Can get an Item', () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				expect(globalLocalStorage.getItem("donkey")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkey");
			});
			it('Can remove an Item', () => {
				globalLocalStorage.setItem("donkey", "bonobo");
				globalLocalStorage.removeItem("donkey");
				expect(globalLocalStorage.getItem("donkey")).to.equal(null);
			});

			it('Can add an Item as Array', () => {
				let array = [ "bonobo", "chimpanzee", "howler" ];

				globalLocalStorage.setItem("donkeys", array);

				expect(globalLocalStorage.getItem("donkeys")).to.not.be.undefined;
				globalLocalStorage.removeItem("donkeys");
			});

			it('Can get an Item Array', () => {
				let array = [ "bonobo", "chimpanzee", "howler" ];

				globalLocalStorage.setItem("donkeys", array);

				let item = globalLocalStorage.getItem("donkeys");

				//console.log("Array: " + item );

				expect(item.length).to.equal(3);
				globalLocalStorage.removeItem("donkeys");
				globalLocalStorage.clear();
			});
		});
	});
});
