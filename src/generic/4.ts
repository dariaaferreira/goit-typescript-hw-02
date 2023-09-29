/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<TProps> {
  constructor (public props: TProps) {

  }
}

class Page extends Component<{title: string}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};