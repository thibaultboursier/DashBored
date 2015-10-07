/**
 * Created by tboursier on 07/10/2015.
 */
describe('App ', function () {
    var init = App.init;

    it("should be able to initialize", function () {
        expect(App.init).toBeDefined();
        spyOn(App, 'init');
        App.init();
        expect(App.init).toHaveBeenCalled();
    });
});