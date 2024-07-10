const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer) throw new Error('$tabContainer does not exist');
if (!$tab) throw new Error('$tab does not exist');
if (!$view) throw new Error('$view does not exist');

function tabContainerFunction(event: Event): void {
  const $tab = document.querySelectorAll('.tab');
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    console.log(`The tab as ${$eventTarget.textContent}`);
  } else {
    console.log('The <tab> does not have class "tab" ');
  }

  for (let i: number = 0; i < $tab.length; i++) {
    const $newTab = $tab[i];
    if ($newTab === $eventTarget) {
      $newTab.className = 'tab active';
    } else {
      $newTab.className = 'tab';
    }
  }

  const $dataView = $eventTarget.dataset.view;
  for (let i: number = 0; i < $view.length; i++) {
    const $newView = $view[i] as HTMLDivElement;
    if ($newView.dataset.view === $dataView) {
      $newView.className = 'view';
    } else {
      $newView.className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', tabContainerFunction);
