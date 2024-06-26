from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "index.html")

def wordCount(request):
    return render(request, "wordCount.html")

def result(request):
    entered_text = request.GET.get('fulltext', '')
    word_list = entered_text.split()
    word_count = len(word_list)
    word_dictionary = {}

    for word in word_list:
        word = word.lower()
        if word in word_dictionary:
            word_dictionary[word] += 1
        else:
            word_dictionary[word] = 1

    return render(request, "result.html", {
        'alltext': entered_text,
        'dictionary': word_dictionary.items(),
        'wordCounting': word_count
    })

def again(request):
    return render(request, "index.html")

def gotowordCount(request):
    return render(request, "wordCount.html")

def wordCounting(request):
    entered_text = request.GET.get('fulltext', '')
    word_list = entered_text.split()
    word_count = len(word_list)
    word_dictionary = {}

    for word in word_list:
        word = word.lower()
        if word in word_dictionary:
            word_dictionary[word] += 1
        else:
            word_dictionary[word] = 1

    return render(request, "result.html", {
        'alltext': entered_text,
        'dictionary': word_dictionary.items(),
        'wordCounting': word_count
    })