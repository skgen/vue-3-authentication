import { createMelkorUi } from '@patriarche/melkor';

import '@patriarche/melkor/style';

import router from '@/plugins/router';

const mkui = () => createMelkorUi({
  router,
});

export default mkui;
