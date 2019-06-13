const LinkStack = ({
  title,
  links
}) => {
  var linkClass = 'block leading-snug px-2 text-sm text-gray-600 hover:text-gray-900 truncate';
  var activeLinkClass = 'block leading-snug px-2 text-sm text-gray-900 font-semibold hover:text-gray-900 truncate'
  
  return <div className="relative">
    <h3 className="mb-0 mt-1 leading-normal text-base font-serif font-thin">{title}</h3>
    <ul>
      {links.map((link, i) => <li key={i+link.text}>
        <a
          className={!!link.active ? activeLinkClass : linkClass}
          href={link.url}
        >
          {link.text || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!'}
        </a>
      </li>)}
    </ul>
  </div>
}
 
export default LinkStack;