export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  const onToggleBtn = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    user: tg.initDataUnsafe?.user?.username,
    queryId: tg.initDataUnsafe?.user?.query_id,
    onClose,
    onToggleBtn,
  };
}
