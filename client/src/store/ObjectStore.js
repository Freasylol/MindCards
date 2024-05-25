import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._depositTypes = [
            {id: 1, minSum: 100 , percent: 4}
        ]
        this._creditTypes = [
            {id: 1, minSum: 100, minTerm: 3, percent: 9, name: 'Annuity'},
            {id: 2, minSum: 100, minTerm: 3, percent: 9, name: 'Differential'}
        ]
        this._cardSets = [
        ];
        this._cardSetsBuffer = [
        ];
        this._cards = [
        ];
        this._cardSetsCount = {};
        this._tasks = {};
        this._currentCardSetId = 1;
        this._userRates = [];
        this._favoriteCardSets = [];
        this._browsingHistory = [];
        this._userLog = [];
        makeAutoObservable(this)
    }

    setTasks(tasks) {
        this._tasks = tasks;
    }

    setCardSetsCount(cardSetsCount) {
        this._cardSetsCount = cardSetsCount;
    }

    setUserLog(userLog) {
        this._userLog = userLog;
    }

    setBrowsingHistory(browsingHistory) {
        this._browsingHistory = browsingHistory
    }

    setFavoriteCardSets(favoriteCardSets) {
        this._favoriteCardSets = favoriteCardSets;
    }

    setUserRates(userRates) {
        this._userRates = userRates;
    }

    setCurrentCardSetId(currentCardSetId) {
        this._currentCardSetId = currentCardSetId;
    }
    
    setCardSets(cardSets) {
        this._cardSets = cardSets
    }

    setCards(cards) {
        this._cards = cards;
    }

    setCardSetsBuffer(cardSetsBuffer) {
        this._cardSetsBuffer = cardSetsBuffer;
    }

    get tasks() {
        return this._tasks;
    }

    get cardSetsCount() {
        return this._cardSetsCount;
    }

    get userLog() {
        return this._userLog;
    }

    get browsingHistory() {
        return this._browsingHistory;
    }

    get favoriteCardSets() {
        return this._favoriteCardSets;
    }

    get userRates() {
        return this._userRates;
    }

    get currentCardSetId() {
        return this._currentCardSetId;
    }

    get cardSetsBuffer() {
        return this._cardSetsBuffer;
    }

    get cardSets() {
        return this._cardSets;
    }

    get cards() {
        return this._cards;
    }
}