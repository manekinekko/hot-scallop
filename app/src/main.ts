import { 
  provideFASTDesignSystem, 
  fastCard, 
} from '@microsoft/fast-components';

provideFASTDesignSystem()
  .register(
    fastCard(),
  );

fetch("/api/getTime")
  .then(res => res.json())
  .then(({ time }) => {
    const element = document.getElementById("current-time");
    if (element) {
      element.innerText = time;
    }
  });