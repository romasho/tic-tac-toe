class TicTacToe {
    constructor() {

    }
    currentPlayer = 'x'
    gameFild = [
        [null, null, null],
        [null, null, null],
        [null, null, null], 
    ]


    getCurrentPlayerSymbol() {
    return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameFild[rowIndex][columnIndex] === null) {
        this.gameFild[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x'}
    }

    isFinished() {  
     return (this.getWinner() !== null || this.isDraw()) } 

    getWinner() {
        for (let i = 0; i < this.gameFild.length; i++) {
            let row = this.gameFild[i][0];
            if (this.gameFild[i][1] === row && row === this.gameFild[i][2]) return row;

            for (let j = 0; j < this.gameFild.length; j++) {
                let column = this.gameFild[0][j];
                if (this.gameFild[1][j] === column && this.gameFild[2][j] === column) {
                    return column;
                }
            }
        }
        let firstDiag = this.gameFild[0][0];
        if (this.gameFild[1][1] === firstDiag && this.gameFild[2][2] === firstDiag) {
            return firstDiag;
        }

        let secondDiag = this.gameFild[0][2];
        if (this.gameFild[1][1] === secondDiag && this.gameFild[2][0] === secondDiag) {
            return secondDiag;
        }
        return null;
    }

    noMoreTurns() {
        let moreTurns = true
        for (let x in this.gameFild) {
            for (let y in this.gameFild[x]) {
                if (this.gameFild[x][y] === null) {
                    moreTurns = false
                } 
            }
        } return moreTurns
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true
        } else {
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameFild[rowIndex][colIndex];
    }
        
}

module.exports = TicTacToe;
