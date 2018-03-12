angular.module('DragDropCtrl', []).controller('DragDropCtrl', function ($scope) {

    $scope.date = new Date();
    $scope.count = 3;

    $scope.dragElements = [
        {
            'Name': "Single Line Text",
            'Type': "text",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Single Text',
                'Type': 'text'
            }, {
                'Name': 'Text',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'text',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Max Input Length',
                'Value': '15',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Number",
            'Type': "number",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Number',
                'Type': 'text'
            }, {
                'Name': 'Number',
                'Value': '',
                'Type': 'number'
            }, {
                'Name': 'Field Type',
                'Value': 'number',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Max Input Length',
                'Value': '50',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Paragraph Text",
            "Type": "textarea",
            'Settings': [{
                'Name': 'Field Label',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Text',
                'Value': '',
                'Type': 'textarea'
            },{
                'Name': 'Field Type',
                'Value': 'textarea',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Checkboxes",
            "Type": "checkbox",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Check All That Apply',
                'Type': 'text'
            }, {
                'Name': 'Choice',
                'Type': 'dropdown_increment',
                'PossibleValue': [
                    {
                        'Text': 'Choice 1'

                    }
                    , {
                        'Text': 'Choice 2'
                    }
                ]
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        }, {
            'Name': "Radio",
            "Type": "radio",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Select a Choice',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'radio',
                'Type': 'string'
            }, {
                'Name': 'Choice 1',
                'Value': 'Choice 1',
                'Type': 'text'
            }, {
                'Name': 'Choice 2',
                'Value': 'Choice 2',
                'Type': 'text'
            }, {
                'Name': 'Choice',
                'Value': 'Choice 3',
                'Type': 'dropdown_increment'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Dropdown",
            "Type": "dropdown",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Select a Choice',
                'Type': 'text'
            }, {
                'Name': 'Choice',
                'Type': 'dropdown_increment',
                'PossibleValue': [
                    {
                        'Text': 'Choice 1'

                    }
                    , {
                        'Text': 'Choice 2'
                    }
                ]
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Section Break",
            'Type': "section_break",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Section Break',
                'Type': 'text'
            }, {
                'Name': 'Instructions for User',
                'Value': 'A description of the section goes here.',
                'Type': 'textarea'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        }, {
            'Name': "Page Break",
            'Type': "page_break",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Page Break',
                'Type': 'text'
            }, {
                'Name': 'Previous',
                'Value': '«',
                'Type': 'text'
            }, {
                'Name': 'Next',
                'Value': '»',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Name",
            'Type': "textName",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Name',
                'Type': 'text'
            }, {
                'Name': 'First name',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Last name',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'text',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            },  {
                'Name': 'Max Input Length',
                'Value': '50',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Upload file",
            'Type': "file",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Upload file',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'file',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Address",
            'Type': "textAdd",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Address',
                'Type': 'text'
            }, {
                'Name': 'Street Address',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Address Line 2',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'City',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'State / Province / Region',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Postal / Zip Code',
                'Value': '',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Date",
            'Type': "date",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Date',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Email",
            'Type': "email",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Email',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Time",
            'Type': "time",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Time',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'time',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        },
        {
            'Name': "Phone",
            'Type': "tel",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Phone',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'text',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        }, {
            'Name': "Web site",
            'Type': "text",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Web site',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'text',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }

            ]
        },
        {
            'Name': "Price",
            'Type': "price",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Price',
                'Type': 'text'
            }, {
                'Name': 'Field Type',
                'Value': 'number',
                'Type': 'dropdown',
                'PossibleValue': ['text', 'number', 'textarea', 'time', 'file']
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }]
        }, {
            'Name': "Likert",
            'Type': "likert",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Evaluate the following statements.',
                'Type': 'text'
            }, {
                'Name': 'Statements',
                'Type': 'submenu',
                'Options': [{
                    'Name': 'Statement one',
                    'Value': 'Statement one',
                    'Type': 'text'
                }, {
                    'Name': 'Statement two',
                    'Value': 'Statement two',
                    'Type': 'text'
                }, {
                    'Name': 'Statement three',
                    'Value': 'Statement three',
                    'Type': 'text'
                }]
            }, {
                'Name': 'Columns',
                'Type': 'submenu',
                'Options': [{
                    'Name': 'Strongly Disagree',
                    'Value': 'Strongly Disagree',
                    'Type': 'text'
                }, {
                    'Name': 'Disagree',
                    'Value': 'Disagree',
                    'Type': 'text'
                }, {
                    'Name': 'Agree',
                    'Value': 'Agree',
                    'Type': 'text'
                }, {
                    'Name': 'Strongly Agree',
                    'Value': 'Strongly Agree',
                    'Type': 'text'
                }]
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }

            ]
        }, {
            'Name': "Rating",
            'Type': "stars",
            'Settings': [{
                'Name': 'Field Label',
                'Value': 'Rating',
                'Type': 'text'
            }, {
                'Name': 'Column Span',
                'Value': '1/1',
                'Type': 'dropdown',
                'PossibleValue': ['1/6', '1/3', '1/1']
            }, {
                'Name': 'General Options',
                'Type': 'checkBoxZone',
                'Options': [{
                    'Name': 'Required',
                    'Value': false
                }, {
                    'Name': 'No Duplicates',
                    'Value': false
                }]
            }

            ]
        }
    ];


    var guid = 1;

    $scope.formFields = [];

    $scope.current_field = {};

    var createNewField = function () {
        return {
            'id': ++guid,
            'Name': '',
            'Settings': [],
            'Active': true,
            'ChangeFieldSetting': function (Value, SettingName) {
                switch (SettingName) {
                    case 'Field Label':

                        $scope.current_field.Name = Value;
                        $scope.current_field.Settings[0].Value = $scope.current_field.Name;
                        // $scope.current_field.Settings[1].Value = $scope.current_field.Name;
                        // $scope.current_field.Settings[2].Value = 'x' + $scope.current_field.Name.replace(/\s/g, '_');
                        break;
                    default:
                        break;
                }
            },
            'GetFieldSetting': function (settingName) {
                var result = {};
                var settings = this.Settings;
                $.each(settings, function (index, set) {
                    if (set.Name === settingName) {
                        result = set;
                        return result;
                    }
                });
                if (!Object.keys(result).length) {
                    $.each(settings[settings.length - 1].Options, function (index, set) {
                        if (set.Name === settingName) {
                            result = set;
                            return result;
                        }
                    });
                }
                return result;
            }
        };
    };

    $scope.changeFieldName = function (Value) {
        $scope.current_field.Name = Value;
        $scope.current_field.Settings[0].Value = $scope.current_field.Name;
        // $scope.current_field.Settings[1].Value = $scope.current_field.Name;
        //$scope.current_field.Settings[2].Value = 'x' + $scope.current_field.Name.replace(/\s/g, '_');
    };

    $scope.removeElement = function (idx) {
        if ($scope.formFields[idx].Active) {
            $('#addFieldTab_lnk').tab('show');
            $scope.current_field = {};

        }
        $scope.formFields.splice(idx, 1);
    };

    $scope.addElement = function (ele, idx) {
        $scope.current_field.Active = false;

        $scope.current_field = createNewField();
        //Merge setting from template object
        angular.merge($scope.current_field, ele);

        if (typeof idx === 'undefined') {
            $scope.formFields.push($scope.current_field);
        } else {
            $scope.formFields.splice(idx, 0, $scope.current_field);
            $('#fieldSettingTab_lnk').tab('show');
        }
    };

    $scope.activeField = function (f) {
        $scope.current_field.Active = false;
        $scope.current_field = f;
        f.Active = true;
        $('#fieldSettingTab_lnk').tab('show');
    };

    $scope.formbuilderSortableOpts = {
        'ui-floating': true
    };


    //add delete
    $scope.choices = [{id: 'choice1'}];

    $scope.addNew = function () {
        var newItemNo = $scope.choices.length + 1;
        $scope.choices.push({'id': 'choice' + newItemNo});
    };

    $scope.remove = function () {
        var lastItem = $scope.choices.length - 1;
        $scope.choices.splice(lastItem);
    };

});