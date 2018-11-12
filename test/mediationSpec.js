
describe('Given Augmented Presentation Mediator', () => {

	describe('Given a Mediation of Views', () => {
		it('Augmented.Presentation.Mediator is defined', () => {
			expect(Augmented.Presentation.Mediator).to.not.be.undefined;
		});

		it('Augmented.Augmented.Presentation.Colleague is defined', () => {
			expect(Augmented.Presentation.Colleague).to.not.be.undefined;
		});

		describe('Given a Mediator Views and Colleague View', () => {
			let m, c;

			beforeEach(() => {
				m = new Augmented.Presentation.Mediator({ "name": "mediator" });
				c = new Augmented.Presentation.Colleague({ "name": "monkey" });
			});

			afterEach(() => {
				c.remove();
				m.remove();
				m = null;
				c = null;
			});

			it('can create an instance that is a mediator', () => {
				expect(m instanceof Augmented.Presentation.Mediator).to.be.true;
			});

			it('can create an instance that is a colleague', () => {
				expect(c instanceof Augmented.Presentation.Colleague).to.be.true;
			});

			it('the mediator can observe a colleague', () => {
				m.observeColleague(c, () => { return "EEAK!";});

				let channels = m.defaultChannel;

				expect(channels).to.not.be.undefined;
				expect(channels instanceof Array).to.be.true;
				expect(channels[0].context).to.equal(c);
				m.dismissColleague(c, () => { return "EEAK!";});
			});

			it('the mediator can subscribe a colleague in the channel "monkey"', () => {
				m.observeColleague(c, () => { return "EEAK!";}, "monkey");

				let channels = m.getChannel("monkey");

				expect(channels).to.not.be.undefined;
				expect(channels instanceof Array).to.be.true;
				expect(channels[0].context).to.equal(c);
				m.dismissColleague(c, () => { return "EEAK!";}, "monkey");
			});

			it('the mediator can add subscriptions to the channel "monkey"', () => {
				m.observeColleague(c, () => { return "EEAK!";}, "monkey");

				m.subscriptions = {
					fn: () => {},
					context: this,
					once: false,
					identifier: "i"
				};

				expect(m.subscriptions).to.not.be.undefined;
				m.dismissColleague(c, () => { return "EEAK!";}, "monkey");
			});

			it('the mediator can dismiss colleagues from channel "monkey"', () => {
				m.observeColleague(c, () => { return "EEAK!";}, "monkey");
				m.dismissColleague(c, () => { return "EEAK!";}, "monkey");
				let channels = m.getChannel("monkey");

				expect(channels).to.deep.equal([]);
			});

			it('the mediator can observe a colleague once and not leak', () => {
				m.observeColleague(c, () => { return "EEAK!";}, "monkey");
				let m2 = new Augmented.Presentation.Mediator();
				m2.observeColleague(c, () => { return "EEAK!";}, "monkey");
				let channels = m2.getChannel("monkey"), c2 = m.getChannel("monkey");

				expect(channels).to.not.be.undefined;
				expect(channels instanceof Array).to.be.true;
				expect(channels[0].context).to.equal(c);
			});

			it('Colleague will not fail to send a message if the mediator is not available', () => {
				let ee = null;
				try {
					c.sendMessage("YouMustNotFail", "fail");
				} catch(e) {
					ee = e;
				}
				expect(ee).to.equal(null);
			});

			it('the mediator can observe a colleague and trigger an event', () => {
				c.on("bubba", (d) => { c.eeak = d; });
        m.observeColleagueAndTrigger(c, "bubba", "monkey");
        m.publish("bubba", "monkey", "EEAK!");
        m.dismissColleagueTrigger(c, "bubba", "monkey");
        expect(c.eeak).to.equal("monkey");
			});

			it('the mediator can observe a colleague with the same message name as channel and not fail', () => {
				c.on("monkey", (d) => { c.eeak = d; });
        m.observeColleagueAndTrigger(c, "monkey", "monkey");
        m.publish("monkey", "monkey", "EEAK!");
        m.dismissColleagueTrigger(c, "monkey", "monkey");
        expect(c.eeak).to.equal("monkey");
			});
		});
	});
});
