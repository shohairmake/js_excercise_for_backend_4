const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('QuizFetcherのクラス', () => {
  describe('fetchメソッドの挙動確認', () => {
    it('fetchメソッドという名前のクラスメソッドを持つ', () => {
      assert.equal(typeof QuizFetcher.fetch, 'function');
    });

    it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {
      const response = await QuizFetcher.fetch();
      const results = response.results;

      assert.equal(Array.isArray(results), true);
      assert.equal(results.length, 10);
      results.forEach(data => {
        // 文字列型のテスト
        assert.equal(typeof data.category, 'string');
        assert.equal(typeof data.type, 'string');
        assert.equal(typeof data.difficulty, 'string');
        assert.equal(typeof data.question, 'string');
        assert.equal(typeof data.correct_answer, 'string');

        // 配列型&配列の中身の型チェック
        assert.equal(Array.isArray(data.incorrect_answers), true);
        assert.equal(data.incorrect_answers.length, 3);
        data.incorrect_answers.forEach(answer => {
          assert.equal(typeof answer, 'string');
        });
      });
    });

    it('【Promise版】fetchメソッドの戻り値の型チェック', () => {
      return QuizFetcher
        .fetch()
        .then(response => {
          const results = response.results;

          assert.equal(Array.isArray(results), true);
          assert.equal(results.length, 10);
          results.forEach(data => {
            // 文字列型のテスト
            assert.equal(typeof data.category, 'string');
            assert.equal(typeof data.type, 'string');
            assert.equal(typeof data.difficulty, 'string');
            assert.equal(typeof data.question, 'string');
            assert.equal(typeof data.correct_answer, 'string');

            // 配列型&配列の中身の型チェック
            assert.equal(Array.isArray(data.incorrect_answers), true);
            assert.equal(data.incorrect_answers.length, 3);
            data.incorrect_answers.forEach(answer => {
              assert.equal(typeof answer, 'string');
            });
          });
        });
    });

    it('【コールバック(done)版】fetchメソッドの戻り値の型チェック', (done) => {
      QuizFetcher
        .fetch()
        .then(response => {
          const results = response.results;

          assert.equal(Array.isArray(results), true);
          assert.equal(results.length, 10);
          results.forEach(data => {
            // 文字列型のテスト
            assert.equal(typeof data.category, 'string');
            assert.equal(typeof data.type, 'string');
            assert.equal(typeof data.difficulty, 'string');
            assert.equal(typeof data.question, 'string');
            assert.equal(typeof data.correct_answer, 'string');

            // 配列型&配列の中身の型チェック
            assert.equal(Array.isArray(data.incorrect_answers), true);
            assert.equal(data.incorrect_answers.length, 3);
            data.incorrect_answers.forEach(answer => {
              assert.equal(typeof answer, 'string');
            });
          });

          done();
        });
    });
  });

});