import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._cardSets = [
        ];
        this._cardSetsBuffer = [
        ];
        this._cards = [
        ];
        this._cardSetsCount = {};
        this._taskSetsCount = {};
        this._tasks = [
            {id: 1, userId: 2, taskSetId: 1, condition: 'Переведите следующее предложение на русский язык ', task: 'I love listening to classical music in the evening', answer: 'Я люблю слушать классическую музыку вечером'},
            {id: 2, userId: 2, taskSetId: 1, condition: 'Переведите следующее предложение на русский язык ', task: 'She plays the piano beautifully', answer: 'Она прекрасно играет на пианино.'}
        ];
        this._taskSets = [
            {id: 1, name: 'testTaskSet', theme: 'Music', description: 'testTaskSet description'},
            {id: 2, name: 'bebra', theme: 'bebra', description: 'bebra description'},

        ]
        this._currentCardSetId = 1;
        this._userRates = [];
        this._favoriteCardSets = [];
        this._favoriteTaskSets = [];
        this._browsingHistory = [];
        this._userLog = [];
        makeAutoObservable(this)
    }

    setTaskSetsCount(taskSetsCount) {
        this._taskSetsCount = taskSetsCount;
    }
    
    setFavoriteTaskSets(favoriteTaskSets) {
        this._favoriteTaskSets = favoriteTaskSets;
    }

    setTaskSets(taskSets) {
        this._taskSets = taskSets;
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

    get taskSetsCount() {
        return this._taskSetsCount;
    }

    get favoriteTaskSets() {
        return this._favoriteTaskSets;
    }

    get taskSets() {
        return this._taskSets;
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