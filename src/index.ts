import { Telegraf, Scenes } from "telegraf";
import LocalSession from "telegraf-session-local";
import {
  getMarkup,
  replyError,
  replyUnaccess,
  replyWithPhotoFile,
} from "./utils/utils";
import { getFullScreen } from "./data/get_full_screen";
import { ROLES, UserContext } from "./types/types";
import { getUser } from "./data/get_user";
import { sendRequestToLog } from "./data/send_request_to_log";
import SCREENS from "./screens/screens";

const main = async () => {
  // Инициализируем бота
  const bot = new Telegraf<UserContext>(process.env.BOT_TOKEN as string);
  const localSession = new LocalSession({
    database: process.env.SESSION_DB as string,
  });

  bot.use(localSession.middleware());

  // Создаем сцены
  const stage = new Scenes.Stage<UserContext>([]);

  // Подключаем сцены к боту
  bot.use(stage.middleware());

  // Определяем роли доступа пользователя
  bot.use((ctx, next) => {
    // Запись в логи
    sendRequestToLog(ctx);

    getUser(ctx.from!.id)
      .then((user) => {
        if (user) {
          ctx.session.roles = user.roles;
          next();
        } else {
          ctx.reply("У Вас нет доступа!");
        }
      })
      .catch((err) => {
        console.log(err);
        ctx.reply("Ошибка доступа!");
      });
  });

  bot.start((ctx) => {
    ctx.reply("Выберите пункт меню!", getMarkup(ctx.session.roles));
  });

  // Добавление нового пользователя
  bot.action(/addUser \|(.+)\| \|(.+)\| \|(.+)\|/, async (ctx) => {
    try {
      const id = ctx.match[1];
      const username = ctx.match[2];
      const fio = ctx.match[3];

      const lineToFile = `${id}|${username}|${fio}\n`;

      ctx.reply(lineToFile);
    } catch (err) {
      console.log(err);
    }
  });

  // Реакция на запрос экрана производительности
  bot.hears(/1A/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d1a)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "1A", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/2ABC/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d2abc)
          .then((image64) =>
            replyWithPhotoFile(
              ctx,
              image64,
              "2ABC",
              getMarkup(ctx.session.roles)
            )
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/2D/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d2d)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "2D", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/5A1/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d5a1)
          .then((image64) =>
            replyWithPhotoFile(
              ctx,
              image64,
              "5A1",
              getMarkup(ctx.session.roles)
            )
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/5A2/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d5a2)
          .then((image64) =>
            replyWithPhotoFile(
              ctx,
              image64,
              "5A2",
              getMarkup(ctx.session.roles)
            )
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/6A/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d6a)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "6A", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/6B/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d6b)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "6B", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/8A/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d8a)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "8A", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/8G/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d8c)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "8G", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/9C/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d9c)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "9C", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/18/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d18)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "18", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/10\/12/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d10_12)
          .then((image64) =>
            replyWithPhotoFile(
              ctx,
              image64,
              "10/12",
              getMarkup(ctx.session.roles)
            )
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/13/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d13)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "13", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  bot.hears(/14/i, (ctx) => {
    try {
      ctx.replyWithChatAction("upload_photo");

      if (ctx.session.roles?.includes(ROLES.common)) {
        getFullScreen(SCREENS.d14)
          .then((image64) =>
            replyWithPhotoFile(ctx, image64, "14", getMarkup(ctx.session.roles))
          )
          .catch((err) => replyError(ctx, err, getMarkup(ctx.session.roles)));
      } else {
        replyUnaccess(ctx, getMarkup(ctx.session.roles));
      }
    } catch (err) {
      console.log(err);
    }
  });

  // Проверка пользователем на работоспособность
  bot.on("text", (ctx) => {
    ctx.reply("Неизвестная команда", getMarkup(ctx.session.roles));
  });

  bot.launch();
  console.log(`Started ${process.env.BOT_NAME} :: ${new Date()}`);
};

main();
