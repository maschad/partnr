import Maker from '@makerdao/dai';
import Config from "react-native-config";


async function openLockDraw() {
    const maker = await Maker.create("http", {
        privateKey: Config.PRIVATE_KEY,
        url: Config.PROJECT_URL
    });

  await maker.authenticate();
  const cdp = await maker.openCdp();

  await cdp.lockEth(0.25);
  await cdp.drawDai(50);

  const debt = await cdp.getDebtValue();
  console.log(debt.toString); // '50.00 DAI'
}

openLockDraw();