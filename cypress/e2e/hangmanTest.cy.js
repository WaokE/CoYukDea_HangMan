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

    it("사용자는 원하는 알파벳 버튼을 클릭하여 정답 맞추기를 시도할 수 있다.", () => {
        // given - 페이지에 접근하고, 버튼을 눌러 게임을 시작한다.
        cy.visit("/");
        cy.get("[data-cy=startButton]").click();
        // when - 원하는 버튼을 눌러, 정답 맞추기를 시도한다.
        cy.get("[data-cy=alphabetButtonA]").click();
        // then - 정답 맞추기가 시도된다.
        cy.get("[data-cy=alphabetButtonA]").should("be.disabled");
    });

    it("사용자는 '힌트 보기' 버튼을 클릭하여 힌트를 확인할 수 있다.", () => {
        // given - 페이지에 접근하여, 게임을 시작한다.
        cy.visit("/");
        cy.get("[data-cy=startButton]").click();
        // when - '힌트 보기' 버튼을 클릭한다.
        cy.get("[data-cy=hintButton]").click();
        // then - 힌트가 보인다.
        cy.get("[data-cy=hintMessage]").should("be.visible");
    });

    it("사용자는 정답을 모두 맞추면 다음 단계로 넘어갈 수 있다.", () => {
        // given - 페이지에 접근하여, 게임을 시작한다.
        cy.visit("/");
        cy.get("[data-cy=startButton]").click();
        // when - 정답 맞추기를 시도하여, 모든 정답을 맞춘다.
        cy.window().then((win) => {
            const answerWord = win.store.getState().answerWord;

            for (let i = 0; i < answerWord.length; i++) {
                const buttonSelector = `[data-cy=alphabetButton${answerWord[i]}]`;

                cy.get(buttonSelector)
                    .should("exist")
                    .then(($button) => {
                        if (!$button.prop("disabled")) {
                            cy.get(buttonSelector).click();
                        } else {
                            cy.log(
                                `버튼 ${buttonSelector}은(는) 비활성화되어 있어 클릭되지 않았습니다.`
                            );
                        }
                    });
            }
        });
        // then - 게임 승리 모달이 보이고, 다음 단계로 넘어갈 수 있다.
        cy.get("[data-cy=gameWinModal]").should("be.visible");
    });
});
