const mocha = require('mocha');
const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('QuizFetcherのクラス', () => {
    describe('fetchメソッドの挙動確認', () => {
        it('fetchメソッドという名前のクラスメソッドを持つ', () => {
            assert.strictEqual(typeof QuizFetcher.fetch, 'function');
        });

        it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {
            const response = await QuizFetcher.fetch();
            const results = response.results;
            assert.strictEqual(Array.isArray(results), true);
            assert.strictEqual(results.length, 10);
            results.forEach(data => {
                assert.strictEqual(typeof data.category, 'string');
                assert.strictEqual(typeof data.type, 'string');
                assert.strictEqual(typeof data.difficulty, 'string');
                assert.strictEqual(typeof data.question, 'string');
                assert.strictEqual(typeof data.correct_answer, 'string');
                assert.strictEqual(Array.isArray(data.incorrect_answers), true);
                assert.strictEqual(data.incorrect_answers.length, 3);
                data.incorrect_answers.forEach(answer => {
                    assert.strictEqual(typeof answer, 'string');
                });
            });
        });

        it('【promise版】fetchメソッドの戻り値の型チェック', () => {
            return QuizFetcher
            .fetch()
            .then(response => {
                const results = response.results;
                assert.strictEqual(Array.isArray(results), true);
                assert.strictEqual(results.length, 10);
                results.forEach(data => {
                    assert.strictEqual(typeof data.category, 'string');
                    assert.strictEqual(typeof data.type, 'string');
                    assert.strictEqual(typeof data.difficulty, 'string');
                    assert.strictEqual(typeof data.question, 'string');
                    assert.strictEqual(typeof data.correct_answer, 'string');
                    assert.strictEqual(Array.isArray(data.incorrect_answers), true);
                    assert.strictEqual(data.incorrect_answers.length, 3);
                    data.incorrect_answers.forEach(answer => {
                        assert.strictEqual(typeof answer, 'string');
                    });
                });
            });
        });

        it('【コールバック(done)版】fetchメソッドの戻り値の型チェック', done => {
            QuizFetcher
            .fetch()
            .then(response => {
                const results = response.results;
                assert.strictEqual(Array.isArray(results), true);
                assert.strictEqual(results.length, 10);
                results.forEach(data => {
                    assert.strictEqual(typeof data.category, 'string');
                    assert.strictEqual(typeof data.type, 'string');
                    assert.strictEqual(typeof data.difficulty, 'string');
                    assert.strictEqual(typeof data.question, 'string');
                    assert.strictEqual(typeof data.correct_answer, 'string');
                    assert.strictEqual(Array.isArray(data.incorrect_answers), true);
                    assert.strictEqual(data.incorrect_answers.length, 3);
                    data.incorrect_answers.forEach(answer=>{
                        assert.strictEqual(typeof answer, 'string');
                    });
                });
            });
            done();
        });
    });
});
