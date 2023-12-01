(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#133-338\">source</a><a href=\"#impl-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.call_once\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#168-173\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.call_once\" class=\"fn\">call_once</a>&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt;(&amp;self, f: F) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Performs an initialization routine once and only once. The given closure\nwill be executed if this is the first time <code>call_once</code> has been called,\nand otherwise the routine will <em>not</em> be invoked.</p>\n<p>This method will block the calling thread if another initialization\nroutine is currently running.</p>\n<p>When this function returns, it is guaranteed that some initialization\nhas run and completed (it may not be the closure specified). The\nreturned pointer will point to the result from the closure that was\nrun.</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>This function will panic if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> previously panicked while attempting\nto initialize. This is similar to the poisoning behaviour of <code>std::sync</code>’s\nprimitives.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin;\n\n<span class=\"kw\">static </span>INIT: spin::Once&lt;usize&gt; = spin::Once::new();\n\n<span class=\"kw\">fn </span>get_cached_val() -&gt; usize {\n    <span class=\"kw-2\">*</span>INIT.call_once(expensive_computation)\n}\n\n<span class=\"kw\">fn </span>expensive_computation() -&gt; usize {\n    <span class=\"comment\">// ...\n</span>}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_call_once\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#208-214\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.try_call_once\" class=\"fn\">try_call_once</a>&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;, E&gt;(\n    &amp;self,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a>, E&gt;</h4></section></summary><div class=\"docblock\"><p>This method is similar to <code>call_once</code>, but allows the given closure to\nfail, and lets the <code>Once</code> in a uninitialized state if it does.</p>\n<p>This method will block the calling thread if another initialization\nroutine is currently running.</p>\n<p>When this function returns without error, it is guaranteed that some\ninitialization has run and completed (it may not be the closure\nspecified). The returned reference will point to the result from the\nclosure that was run.</p>\n<h5 id=\"panics-1\"><a href=\"#panics-1\">Panics</a></h5>\n<p>This function will panic if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> previously panicked while attempting\nto initialize. This is similar to the poisoning behaviour of <code>std::sync</code>’s\nprimitives.</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin;\n\n<span class=\"kw\">static </span>INIT: spin::Once&lt;usize&gt; = spin::Once::new();\n\n<span class=\"kw\">fn </span>get_cached_val() -&gt; <span class=\"prelude-ty\">Result</span>&lt;usize, String&gt; {\n    INIT.try_call_once(expensive_fallible_computation).map(|x| <span class=\"kw-2\">*</span>x)\n}\n\n<span class=\"kw\">fn </span>expensive_fallible_computation() -&gt; <span class=\"prelude-ty\">Result</span>&lt;usize, String&gt; {\n    <span class=\"comment\">// ...\n</span>}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#306-313\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.wait\" class=\"fn\">wait</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Spins until the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> contains a value.</p>\n<p>Note that in releases prior to <code>0.7</code>, this function had the behaviour of <a href=\"spin/once/struct.Once.html#method.poll\" title=\"method spin::once::Once::poll\"><code>Once::poll</code></a>.</p>\n<h5 id=\"panics-2\"><a href=\"#panics-2\">Panics</a></h5>\n<p>This function will panic if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> previously panicked while attempting\nto initialize. This is similar to the poisoning behaviour of <code>std::sync</code>’s\nprimitives.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#325-337\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.poll\" class=\"fn\">poll</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Like <a href=\"spin/once/struct.Once.html#method.get\" title=\"method spin::once::Once::get\"><code>Once::get</code></a>, but will spin if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> is in the process of being\ninitialized. If initialization has not even begun, <code>None</code> will be returned.</p>\n<p>Note that in releases prior to <code>0.7</code>, this function was named <code>wait</code>.</p>\n<h5 id=\"panics-3\"><a href=\"#panics-3\">Panics</a></h5>\n<p>This function will panic if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> previously panicked while attempting\nto initialize. This is similar to the poisoning behaviour of <code>std::sync</code>’s\nprimitives.</p>\n</div></details></div></details>",0,"spin::Once"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#340-489\">source</a><a href=\"#impl-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.INIT\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#343-347\">source</a><h4 class=\"code-header\">pub const <a href=\"spin/once/struct.Once.html#associatedconstant.INIT\" class=\"constant\">INIT</a>: Self = _</h4></section></summary><div class=\"docblock\"><p>Initialization constant of <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#350-352\">source</a><h4 class=\"code-header\">pub const fn <a href=\"spin/once/struct.Once.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialized\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#355-361\">source</a><h4 class=\"code-header\">pub const fn <a href=\"spin/once/struct.Once.html#tymethod.initialized\" class=\"fn\">initialized</a>(data: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new initialized <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#368-372\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.as_mut_ptr\" class=\"fn\">as_mut_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.pointer.html\">*mut T</a></h4></section></summary><div class=\"docblock\"><p>Retrieve a pointer to the inner data.</p>\n<p>While this method itself is safe, accessing the pointer before the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been\ninitialized is UB, unless this method has already been written to from a pointer coming\nfrom this method.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#399-406\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the inner value if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been initialized.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#416-423\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/once/struct.Once.html#tymethod.get_unchecked\" class=\"fn\">get_unchecked</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the inner value on the unchecked assumption that the  <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been initialized.</p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p>This is <em>extremely</em> unsafe if the <code>Once</code> has not already been initialized because a reference to uninitialized\nmemory will be returned, immediately triggering undefined behaviour (even if the reference goes unused).\nHowever, this can be useful in some instances for exposing the <code>Once</code> to FFI or when the overhead of atomically\nchecking initialization is unacceptable and the <code>Once</code> has already been initialized.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#429-434\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the inner value if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been initialized.</p>\n<p>Because this method requires a mutable reference to the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a>, no synchronization\noverhead is required to access the inner value. In effect, it is zero-cost.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#444-451\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/once/struct.Once.html#tymethod.get_mut_unchecked\" class=\"fn\">get_mut_unchecked</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the inner value</p>\n<h5 id=\"safety-1\"><a href=\"#safety-1\">Safety</a></h5>\n<p>This is <em>extremely</em> unsafe if the <code>Once</code> has not already been initialized because a reference to uninitialized\nmemory will be returned, immediately triggering undefined behaviour (even if the reference goes unused).\nHowever, this can be useful in some instances for exposing the <code>Once</code> to FFI or when the overhead of atomically\nchecking initialization is unacceptable and the <code>Once</code> has already been initialized.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#457-462\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.try_into_inner\" class=\"fn\">try_into_inner</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a the inner value if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been initialized.</p>\n<p>Because this method requires ownership of the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a>, no synchronization overhead\nis required to access the inner value. In effect, it is zero-cost.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#471-478\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/once/struct.Once.html#tymethod.into_inner_unchecked\" class=\"fn\">into_inner_unchecked</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Returns a the inner value if the <a href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\"><code>Once</code></a> has been initialized.</p>\n<h5 id=\"safety-2\"><a href=\"#safety-2\">Safety</a></h5>\n<p>This is <em>extremely</em> unsafe if the <code>Once</code> has not already been initialized because a reference to uninitialized\nmemory will be returned, immediately triggering undefined behaviour (even if the reference goes unused)\nThis can be useful, if <code>Once</code> has already been initialized, and you want to bypass an\noption check.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_completed\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#485-488\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/once/struct.Once.html#tymethod.is_completed\" class=\"fn\">is_completed</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks whether the value has been initialized.</p>\n<p>This is done using <a href=\"https://doc.rust-lang.org/nightly/core/sync/atomic/enum.Ordering.html#variant.Acquire\" title=\"variant core::sync::atomic::Ordering::Acquire\"><code>Acquire</code></a> ordering, and\ntherefore it is safe to access the value directly via\n<a href=\"spin/once/struct.Once.html#method.get_unchecked\" title=\"method spin::once::Once::get_unchecked\"><code>get_unchecked</code></a> if this returns true.</p>\n</div></details></div></details>",0,"spin::Once"],["<section id=\"impl-Send-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#54\">source</a><a href=\"#impl-Send-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section>","Send","spin::Once"],["<section id=\"impl-Sync-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#53\">source</a><a href=\"#impl-Sync-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section>","Sync","spin::Once"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#34-38\">source</a><a href=\"#impl-Default-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#35-37\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","spin::Once"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#497-507\">source</a><a href=\"#impl-Drop-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#498-506\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","spin::Once"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#491-495\">source</a><a href=\"#impl-From%3CT%3E-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#492-494\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(data: T) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","spin::Once"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Once%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#40-49\">source</a><a href=\"#impl-Debug-for-Once%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/once.rs.html#41-48\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin::Once"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()