export interface NewsRss {
    rss: IRssObject;
  }
  
  export interface IRssObject {
    $: any;
    channel: Array<IRssChannel>;
  }
  
  export interface IRssChannel {
    "atom:link": Array<string>;
    description: Array<string>;
    link: Array<string>;
    title: Array<string>;
  }
  