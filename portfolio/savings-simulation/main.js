'use strict';

{
  // ユーザー定義オブジェクト
  function hello(word) {
    this.name = word;
    this.func = function() {
      // alert(this.name);
      swal(this.name);
    }
  }
  const aisatsu = new hello("こんにちは！\n貯金シミュレーションぜひご活用ください。");
  aisatsu.func();  // -> "メッセージ"


  // idの取得
  const price = document.getElementById("price");
  const num = document.getElementById("num");
  const unit = document.getElementById("unit");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const reset = document.getElementById("reset");

  // 入力値のチェック
  function checkInput() {
    if (
      // 0をはじめに入力していないか
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null &&
      // 「貯金単位」選択していないか
      unit.options[0].selected === false
    ) {
      btn.classList.remove("disabled");
    } else {
      btn.classList.add("disabled");
    }
  }

  // 「計算」クリック後の処理
  btn.addEventListener("click", function() {
    let pay;
    let str;

    if (this.classList.contains("disabled") === true) {
      return;
    }

    // 貯金単位の条件分岐
    if (unit.options[1].selected === true) {
      // 目標金額 ÷ 目標年数
      pay = Math.ceil(price.value / num.value);
      str = "1年間で" + pay + "円貯める必要があります。";
    } else {
      // 目標金額 ÷ 目標年数 ÷ 貯金単位
      pay = Math.ceil(price.value / num.value / unit.value);
      str = "1年間で" + unit.value + "円を" + pay + "枚貯める必要があります。";
    }
    // result-area
    result.textContent = str;
    reset.classList.remove("hid");
  });

  // 入力値チェック関数へ
  price.addEventListener("keyup", checkInput);
  num.addEventListener("keyup", checkInput);
  unit.addEventListener("mouseleave", checkInput);

  // 「もう一度計算」クリック後の処理（jQuery）
  $(reset).on("click", function() {
    $(result).text("ここに結果を表示します");
    $(price).val("");
    $(num).val("");
    $(btn).addClass("disabled");
    $(reset).addClass("hid");
    $(price).focus();
  });

  // 「目標金額」にカーソル
  price.focus();
}