import { 
  provideFASTDesignSystem, 
  fastCard, 
} from '@microsoft/fast-components';

provideFASTDesignSystem()
  .register(
    fastCard(),
  );

fetch("http://localhost:7071/api/getTime")
  .then(res => res.json())
  .then(({ time }) => {
    const element = document.getElementById("current-time");
    if (element) {
      element.innerText = time;
    }
  });