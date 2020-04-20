from flask import Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

@app.route('/')
def hello_world():
    return '<h1>Hello, World!</h1>'


#@app.route('/hello')
#@app.route('/hello/<name>')
#def hello(name=None):
#    return render_template('home copy.html', name=name)

class ReusableForm(Form):
    name = TextField('Name:', validators=[validators.required()])

    @app.route("/hello", methods=['GET', 'POST'])
    def hello():
        form = ReusableForm(request.form)

        print(form.errors)
        if request.method == 'POST':
            name=request.form['name']
            print(name)

        if form.validate():
            # Save the comment here.
            flash('Hello ' + name)
        else:
            flash('All the form fields are required. ')

        return render_template('home copy.html', form=form)


if __name__ == '__main__':
    app.run(debug=True)
