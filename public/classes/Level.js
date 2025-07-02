class GameLevel {
    constructor(levelNumber, mapData, coinsPresent) {
      this.LevelNumber = levelNumber;
      this.MapData = mapData;
      this.Cleared = false;
      this.TimeCleared = 0;
      this.CoinsPresent = coinsPresent;
      this.CoinsCollected = 0;
      this.MaxCoins = 0;
      this.Stars = 0;
  
      this._startTime = null;
    }
  
    StartTimer() {
      this._startTime = Date.now();
    }
  
    EndTimer() {
      if (this._startTime) {
        const elapsedSeconds = (Date.now() - this._startTime) / 1000;
        this.SetTimer(elapsedSeconds);
        this.SetMaxCoins();
        this.Stars = this.CalculateStars();
        this.IsClear();
      }
      this._startTime = null;
    }
  
    SetTimer(newTime) {
      if (this.TimeCleared === 0 || newTime < this.TimeCleared) {
        this.TimeCleared = newTime;
      }
    }
  
    SetCoins() {
      this.CoinsCollected++;
    }
  
    SetMaxCoins() {
      if (this.CoinsCollected > this.MaxCoins) {
        this.MaxCoins = this.CoinsCollected;
      }
    }
  
    CalculateStars() {
      let stars = 1;
      if (this.TimeCleared < 60 && this.CoinsCollected === this.CoinsPresent) {
        stars = 3;
      } else if (this.CoinsCollected >= this.CoinsPresent / 2) {
        stars = 2;
      }
      return stars;
    }
  
    IsClear() {
      if (this.CoinsCollected >= this.CoinsPresent) {
        this.Cleared = true;
        return true;
      }
      return false;
    }
  }
  
