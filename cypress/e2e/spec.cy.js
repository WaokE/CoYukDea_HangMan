describe("행맨 게임 작동 테스트", () => {
    it("사용자는 게임 시작 버튼을 통해 게임을 시작할 수 있다.", () => {
        // given - 페이지에 접근한다
        cy.visit("/");
        // when - 게임 시작 버튼을 클릭한다
        cy.get("[data-cy=startButton]").click();
        // then - 게임이 시작된다
        cy.get("[data-cy=gameStartModal]").should("not.exist");
        cy.window()
            .its("store")
            .invoke("getState")
            .its("gameStartMessage")
            .should("not.eq", "None");
    });
});
