CodeRunner
==========

Allows you to run &lt;code> blocks.

Usage
-----

    <code code-lang="html">
      <button id="stuff">click me</button>
      <div id="text"></div>
      <style></style>
      <script></script>
    </code>
    
    <code code-lang = "c++11" template = "std-main">
      for(int i = 0; i < 10; i++)
        cout << i << endl;
    </code>

or something like that. It will format it nicely, and have a "run" button below it, with which it can then interpret/run the code in-browser (or on server, given that only server-served code, non-edited, can be run). Security issues, of course, are rampant.
