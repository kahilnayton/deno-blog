/** @jsx h */
    import { h } from "preact";
    import SearchBar from "../../islands/SearchBar.tsx"
    
    export default function Page() {
      return (
        <div class="blog-post">
            <SearchBar></SearchBar>
            <h1 id="this-is-the-main-page">This is the main page</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Etiam</strong> ultricies
dolor tellus, a commodo arcu iaculis ew. <em>Praesent</em> dapibus ultrices tempor.
Vestibulum id justo ut ipsum euismod iaculis eget ac nunc. Morbi neque est,
euismod nec tempus in, fermentum vitae nibh. Curabitur euismod nibh a
condimentum faucibus. Curabitur non nisi a magna fringilla varius. Aliquam
pharetra congue finibus. Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Ut non feugiat purus, ac semper ex. Mauris quis risus quis odio sagittis
egestas. Sed consequat, magna nec dictum vehicula, metus nisl sollicitudin sem,
quis feugiat arcu risus vitae arcu.</p>

<ul>
<li><p>Hello</p>
</li>
<li><p>yo</p>
</li>
</ul>
<h2 id="h2">h2</h2>
<h3 id="h3">h3</h3>

        </div>
      );
    }
