const uri = window.location.protocol + "//" + window.location.host + window.location.pathname;

describe('Given Presentation Request', () => {
	it('is defined', () => {
		expect(Augmented.Presentation.request).to.not.be.undefined;
	});

	xdescribe('can fetch', () => {
		let success = null;

		beforeEach( (done) => {
			Augmented.Presentation.request({
				url: uri,
				contentType: 'text/plain',
				dataType: 'text',
				async: true,
				headers: { "custom": "something" },
				success: (data, status) => { success = true; done(); },
				failure: (data, status) => { success = false; done(); }
			});
		});

		it('can fetch a file via simple ajax', () => {
			expect(success).to.be.true;
		});
	});
	describe('can mock a fetch', () => {
		let success = null;

		beforeEach( (done) => {
			Augmented.Presentation.request({
				url: uri,
				contentType: 'text/plain',
				dataType: 'text',
				async: true,
				mock: true,
				headers: { "custom": "something" },
				success: (data, status) => { success = true; done(); },
				failure: (data, status) => { success = false; done(); }
			});
		});

		it('can fetch a file via simple ajax', () => {
			expect(success).to.be.true;
		});
	});
});
