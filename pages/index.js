import React from 'react';
import nextCookie from 'next-cookies';
import cookie from "js-cookie";
import Layout from '../src/modules/layout';
import { LoremIpsum } from '../src/utils';

const Index = (props) => {
  console.log('props: ', props);

  return (
    <Layout className="p-3">
      {/* <pre>{JSON.stringify(props, undefined, 2)}</pre> */}

      <h1>Lorem ipsum dolor sit amet.</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h4>Lorem ipsum dolor sit.</h4>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <h6>Lorem ipsum dolor sit amet.</h6>
      <a href="/">Home</a>
      <div className="flex">
        <button className="btn btn-primary">
          Button
        </button>
        <button className="btn btn-blue">
          Button
        </button>
        <button className="btn btn-primary-outline">
          Button
        </button>
        <button className="btn btn-blue-outline">
          Button
        </button>
        <button className="btn btn-gray">
          Button
        </button>
        <button className="btn btn-gray-outline">
          Button
        </button>

      </div>

      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          {/* <img className="h-12 w-12 text-blue-200" src="/static/assets/zondicons/add-solid.svg" alt="ChitChat Logo"/> */}
          <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stopColor="#2397B3" offset="0%"></stop><stop stopColor="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stopColor="#73DFF2" offset="0%"></stop><stop stopColor="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>

      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
          <p className="mt-2 text-primary-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>


      <div className="relative flex">
        <input type="text" className="form-control bg-white border-grey"/>
      </div>
      <ul className="list-reset">
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>
              {`add_filter( 'init', 'remove_my_action');
              function remove_my_action() { 
                remove_filter("comment_text",array("CLD_Comments_Hooks","comments_like_dislike"),200,2);
              }`}
            </code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">Javascript</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.</code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">PHP</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.</code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">Java</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.</code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">Python</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.</code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">Ruby</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
        <li>
          <a href="#"><h2 className="title">Asynchronous Javascript Programming</h2></a>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, praesentium, quidem soluta consequuntur quas reiciendis vero facere fugiat at impedit sunt hic saepe architecto dolor? Sapiente in pariatur quod ea.</p>
          <div className="snippet">
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.</code>
          </div>
          <div className="snippet-footer">
            <div className="set">
              <a href="#"><h4 className="tags">Scala</h4></a>
              <ul className="subset">
                <li><a href="#"><h5 className="tags">lorem 1</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 2</h5></a></li>
                <li><a href="#"><h5 className="tags">lorem 3</h5></a></li>
              </ul>
            </div>
            <div className="achieve">
              <p>Comments <span>62</span></p>
              <p>Shares <span>34</span></p>
              <p>Reputations <span>6534</span></p>
            </div>
          </div>
        </li>
      </ul>

      <div>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(lorem => <LoremIpsum key={lorem}/>)}
      </div>
      <div>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(lorem => <LoremIpsum key={lorem}/>)}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function(ctx) {
  const { sessionId } = await nextCookie(ctx);
  await cookie.set("sessionId", sessionId, { maxAge: parseInt(process.env.COOKIE_MAXAGE, 10) });
  const {req, isServer} = ctx;
  console.log('isServer: ', isServer);
  let user = isServer ? req.user : undefined;
  console.log('user: ', user);


  return {
    user,
    custom: {data: 'yes'},
    sessionId
  }
}

export default Index
