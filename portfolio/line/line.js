$(function() {
    // Enterキーが押された時の処理
    $(".message-text").on("keypress", (e) => {
        if (e.which === 13) {
            // チャットを送信
            addChat()
            return false;
        }
    })

    // 送信ボタンがクリックされた時の処理
    $("#send").on("click", addChat)
    function addChat() {
        // 入力欄の文字を取得
        var messageText = $("#text").val();
        
        // 入力欄が空なら終了
        if (messageText === " ") {
            return false;
        }

        //チャットエリアの要素を取得
        var chatArea = $("#chat-area");
        // チャットエリアにdiv要素を追加
        var messageContainer = $("<div></div>").addClass("message-container");
        
        // 「自分」「相手」どちらが送るか
        var messagePerson = $("input[name='person']:checked").val();
        if (messagePerson === "me") {
            // 自分の時
            messageContainer.addClass("container-me");
        } else {
            // 相手の時
            messageContainer.addClass("container-you");
        }

        // メッセージ要素を追加(チャットエリアに表示)
        var message = $("<p></p>").addClass("chat-message").text(messageText)

        // Dateオブジェクトを取得
        var nowDate = new Date();
        // 24時間表記で0～9時の間は0を追加する
        // var hour = (nowDate.getHours() >= 10) ? nowDate.getHours() : "'0' + nowDate.getHours";
        var hour = (nowDate.getHours().toString().padStart(2,"0"));
        // 0～9分の間は0を追加する
        // var minutes = (nowDate.getMinutes() >= 10) ? nowDate.getMinutes() : "0" + nowDate.getMinutes;
        var minutes = (nowDate.getMinutes().toString().padStart(2, "0"));
        // 現在の時間
        var nowTime = hour + ":" + minutes;
        // 時間のｐタグを用意
        var sendTime = $("<p></p>").text(nowTime).addClass("chat-time");

        // 定義したdivの中にメッセージと送信時間を追加
        messageContainer.append(sendTime).append(message)
        // メッセージのやり取りエリアに今送信した内容を追加
        chatArea.append(messageContainer);

        // 最下部までスクロール
        chatArea.scrollTop(chatArea[0].scrollHeight);

        // 入力欄を空にする
        $("#text").val(" ")
    }
})