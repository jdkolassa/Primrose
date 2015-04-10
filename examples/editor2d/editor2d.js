/*
 * Copyright (C) 2015 Sean
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
require( [ "../../src/Primrose", "../../test/testing", "../rosetta_24_game",
  "../../test/tests" ], function ( Primrose, Assert, rosetta_24_game,
    testObjects ) {
  "use strict";

  var editor = new Primrose( "editor",{
    file: rosetta_24_game.toString(),
    autoBindEvents: true,
    renderer: Primrose.Renderers.Canvas
  });

  var tests = new Primrose( "testResults", {
    file: Assert.stringTest( testObjects ),
    readOnly: true,
    autoBindEvents: true,
    tokenizer: Primrose.Grammars.TestResults,
    theme: Primrose.Themes.Dark,
    renderer: Primrose.Renderers.Canvas
  } );

  var container = document.getElementById("editorContainer");
  editorContainer.appendChild(editor.getDOMElement());
  editorContainer.appendChild(tests.getDOMElement());

  editor.appendControls( document.getElementById( "controls" ) );
} );